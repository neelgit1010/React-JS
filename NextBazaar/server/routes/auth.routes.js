import { Router } from "express";
import {
  handleSignup,
  handleSignin,
  handleLogout,
  handleRefreshToken,
  getProfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
const router = Router();

router.post("/signup", handleSignup);
router.post("/signin", handleSignin);
router.post("/logout", handleLogout);
router.post("/refresh-token", handleRefreshToken);
router.get("/profile", protectRoute, getProfile);

export default router;
