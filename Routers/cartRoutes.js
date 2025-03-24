import express from 'express';
import { authMiddleware } from '../Middlewares/authMiddleware.js';
import { addToCart, removeFromCart, updateCartQuantity, viewCart } from '../Controllers/cartController.js';

const router = express.Router();

router.post("/add", authMiddleware, addToCart);
router.delete("/remove/:productId", authMiddleware, removeFromCart);
router.put("/update/:productId", authMiddleware, updateCartQuantity);
router.get("/view", authMiddleware, viewCart);

export default router;