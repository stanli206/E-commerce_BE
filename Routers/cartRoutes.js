import express from 'express';
import { authMiddleware } from '../Middlewares/authMiddleware.js';
import { addToCart, viewCart } from '../Controllers/cartController.js';

const router = express.Router();

router.post("/add", authMiddleware, addToCart);
router.get("/view", authMiddleware, viewCart);

export default router;