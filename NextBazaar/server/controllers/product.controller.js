import { redis } from "../lib/redis.js";
import productModel from "../models/product.model.js";
import cloudinary from "../lib/cloudinary.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find({}).sort({ createdAt: -1 });
    res.status(200).json({ products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getFeaturedProducts = async (req, res) => {
  let featuredroducts = await redis.get("featuredProducts");
  try {
    if (featuredroducts) {
      res.status(200).json({ products: JSON.parse(featuredroducts) });
    } else {
      featuredroducts = await productModel
        .find({ isFeatured: true })
        .sort({ createdAt: -1 })
        .lean()
        .limit(4);
      await redis.set("featuredProducts", JSON.stringify(featuredroducts));
      res.status(200).json({ products });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const createProduct = async (req, res) => {
  const { name, price, description, image, category } = req.body;

  let result = null;
  // store image to cloudinary
  try {
    if (image) {
      result = await cloudinary.uploader.upload(image, {
        folder: "products",
      });
    }
    const product = await productModel.create({
      name,
      price,
      description,
      image: result?.secure_url ? result?.secure_url : "",
      category,
    });
    res.status(201).json({ product, message: "Product created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productModel.findById(id);
    //deleting product image from cloudinary
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    } else if (product.image) {
      const publicId = product.image.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(`products/${publicId}`);
    }
    // deleting product from db
    await productModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getProductRecommendations = async (req, res) => {
  try {
    const products = await productModel.aggregate([
      {
        $sample: { size: 4 },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          image: 1,
          description: 1,
          price: 1,
        },
      },
    ]);
    res.status(200).json({ products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getProductsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const products = await productModel.find({ category });
    res.status(200).json({ products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const toggleFeatureProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.isFeatured = !product.isFeatured;
    await updateFeatureProductCache();
    await product.save();
    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const updateFeatureProductCache = async () => {
  try {
    const featuredroducts = await productModel
      .find({ isFeatured: true })
      .lean();
    await redis.set("featuredProducts", JSON.stringify(featuredroducts));
  } catch (error) {
    console.log("Error updating featured product in cache: ", error);
  }
};

export {
  getAllProducts,
  getFeaturedProducts,
  createProduct,
  deleteProduct,
  getProductRecommendations,
  getProductsByCategory,
  toggleFeatureProduct,
};