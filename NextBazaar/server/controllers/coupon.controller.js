import couponModel from "../models/coupon.model.js";

const getCoupon = async (req, res) => {
  const user = req.user;
  try {
    const coupon = await couponModel.findOne({
      user: user._id,
      isActive: true,
    });
    res.status(200).json(coupon || null);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const validateCoupon = async (req, res) => {
  const user = req.user;
  const { code } = req.body;
  try {
    const coupon = await couponModel.findOne({
      user: user._id,
      code: code,
      isActive: true,
    });

    if (!coupon) {
      return res.status(404).json({ message: "Coupon not found" });
    }

    if (coupon.expirationDate < new Date()) {
      coupon.isActive = false;
      await coupon.save();
      return res.status(404).json({ message: "Coupon expired" });
    }
    res.status(200).json({
      message: "Coupon is valid",
      discount: coupon.discount,
      code: coupon.code,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export { getCoupon, validateCoupon };
