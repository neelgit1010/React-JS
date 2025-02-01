import "dotenv/config"
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

const adminRoute = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        res.status(403).json({ error: "Forbidden - Admin access required" });
    }
};

const protectRoute = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No access token found" });
    }

    try {
      const decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
      const user = await userModel.findById(decoded.id).select("-password");

      if (!user) {
        return res.status(401).json({ error: "Unauthorized - User not found" });
      }

      req.user = user;
      next();
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({ error: "Unauthorized - Token expired" });
      }
      throw error;
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
export { adminRoute, protectRoute };
