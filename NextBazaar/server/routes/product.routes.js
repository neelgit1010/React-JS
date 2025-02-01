import { Router } from "express";
import { protectRoute, adminRoute } from "../middlewares/auth.middleware.js";
import {
  getAllProducts,
  getFeaturedProducts,
  createProduct,
  deleteProduct,
  getProductRecommendations,
  getProductsByCategory,
  toggleFeatureProduct,
} from "../controllers/product.controller.js";
const router = Router();

router.get("/", protectRoute, adminRoute, getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/recommendations", getProductRecommendations);
router.get("/category/:category", getProductsByCategory);
router.post("/", protectRoute, adminRoute, createProduct);
router.patch("/:id", protectRoute, adminRoute, toggleFeatureProduct);
router.delete("/:id", protectRoute, adminRoute, deleteProduct);

export default router;
