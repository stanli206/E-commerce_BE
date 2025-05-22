import express from "express";
import { authMiddleware } from "../Middlewares/authMiddleware.js";
import {
  getAllOrders,
  getMyOrders,
  markOrderAsPaid,
  placeOrder,
  updateOrderStatus,
} from "../Controllers/orderController.js";
import { adminMiddleware } from "../Middlewares/roleMiddleware.js";

const router = express.Router();

router.post("/create", authMiddleware, placeOrder);
router.get("/", authMiddleware, adminMiddleware, getAllOrders);
router.get("/my-orders", authMiddleware, getMyOrders);
router.put("/update/:id", authMiddleware, adminMiddleware, updateOrderStatus);
router.post("/success", authMiddleware, markOrderAsPaid);

export default router;
