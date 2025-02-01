import { Router } from "express";
import { protectRoute, adminRoute } from "../middlewares/auth.middleware.js";
import { handleUserAnalytics } from "../controllers/analytics.controller.js";
const router = Router()

router.get("/", protectRoute, adminRoute, handleUserAnalytics)

export default router