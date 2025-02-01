import productModel from "../models/product.model.js";

const addToCart = async (req, res) => {
  const user = req.user;
  const { productId } = req.body;

  try {
    const existingItem = user.cartItems.find((item) => item.id === productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      user.cartItems.push(productId);
    }
    await user.save();
    res
      .status(200)
      .json({ cartItems: user.cartItems, message: "Product added to cart" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const removeAllFromCart = async (req, res) => {
  const user = req.user;
  const { productId } = req.body;

  try {
    if (productId) {
      user.cartItems = user.cartItems.filter((item) => item.id !== productId);
    } else {
      user.cartItems = [];
    }
    await user.save();
    res.status(200).json({ cartItems: user.cartItems });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const updateQuantity = async (req, res) => {
  const user = req.user;
  const { quantity } = req.body;
  const { id: productId } = req.params;
  const existingItem = user.cartItems.find((item) => item.id === productId);

  try {
    if (existingItem) {
      if (quantity === 0) {
        user.cartItems = user.cartItems.filter((item) => item.id !== productId);
        await user.save();
        res.status(200).json({ cartItems: user.cartItems });
      }

      existingItem.quantity = quantity;
      await user.save();
      res.status(200).json({ cartItems: user.cartItems });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getCartProducts = async (req, res) => {
  const user = req.user;
  try {
    const products = await productModel.find({ _id: { $in: user.cartItems } });

    // add quantity to each product
    const cartItems = products.map((product) => {
      const cartItem = user.cartItems.find((item) => item.id === product._id);
      return { ...product.toJSON(), quantity: cartItem.quantity };
    });

    res.status(200).json(cartItems);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export { addToCart, removeAllFromCart, updateQuantity, getCartProducts };
