import express from 'express';
import { createProduct, getAllProduct } from '../Controllers/productController.js';
import { authMiddleware } from '../Middlewares/authMiddleware.js';
import { adminMiddleware } from '../Middlewares/roleMiddleware.js';

const router = express.Router();

router.post("/create", authMiddleware, adminMiddleware, createProduct);
router.get("/", getAllProduct);

export default router;