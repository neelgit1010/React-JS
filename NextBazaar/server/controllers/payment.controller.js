import "dotenv/config";
import couponModel from "../models/coupon.model.js";
import { stripe } from "../lib/stripe.js";

const createCheckoutSession = async (req, res) => {
  const { products, couponCode } = req.body;

  if (!Array.isArray(products) && products.length === 0) {
    return res
      .status(400)
      .json({ error: "Please select at least one product" });
  }

  try {
    let totalAmount = 0;
    const lineItems = products.map((product) => {
      const amount = product.price * 100; // stripe wants u to send in cents(x100)
      totalAmount += amount * product.quantity;
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            image: product.image,
          },
          unit_amount: amount,
        },
        quantity: product.quantity,
      };
    });

    let coupon = null;
    if (couponCode) {
      coupon = await couponModel.findOne({
        code: couponCode,
        user: req.user._id,
        isActive: true,
      });
      if (coupon) {
        totalAmount -= Math.round(totalAmount * (coupon.discount / 100));
      }
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/purchase-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/purchase-cancel`,
      discounts: coupon
        ? [{ coupon: await createStripeCoupon(coupon.discount) }]
        : [],
      metadata: {
        userId: req.user._id.toString(),
        coupon: couponCode || "",
        products: JSON.stringify(
          products.map((product) => ({
            id: product._id,
            quantity: product.quantity,
            price: product.price,
          }))
        ),
      },
    });

    // if user buys more than $200, create a new coupon for discount
    if (totalAmount >= 20000) {
      await createNewCoupon(req.user._id);
    }
    res.json({ sessionId: session.id, amount: totalAmount / 100 });
  } catch (error) {}
};

const createStripeCoupon = async (discount) => {
  const stripeCoupon = await stripe.coupons.create({
    percent_off: discount,
    duration: "once",
  });
  return stripeCoupon.id;
};

const createNewCoupon = async (userId) => {
  const coupon = new couponModel({
    user: userId,
    code: "NEEL" + Math.random().toString(36).substring(2, 9).toUpperCase(),
    discount: 10,
    expirationDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
  });

  await coupon.save();
  return coupon;
};

const checkoutSuccess = async (req, res) => {
  try {
    const { sessionId } = req.body;
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status === "paid") {
      if (session.metadata.coupon) {
        await couponModel.findOneAndUpdate(
          {
            code: session.metadata.coupon,
            user: session.metadata.userId,
          },
          {
            isActive: false,
          }
        );
      }

      // Create new order, since payment is successful
      const products = JSON.parse(session.metadata.products);
      const newOrder = new orderModel({
        user: session.metadata.userId,
        products: products.map((product) => ({
          product: product.id,
          quantity: product.quantity,
          price: product.price,
        })),
        totalAmount: session.amount_total / 100, // cents to dollar conversion
        stripeSessionId: sessionId,
      });

      await newOrder.save();
      res
        .status(200)
        .json({
          message: "Payment done, Order placed successfully",
          orderId: newOrder._id,
          success: true,
        });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export { createCheckoutSession, checkoutSuccess };
