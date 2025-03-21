import express from 'express';
import { createProduct, deleteProduct, getAllProduct, updateProduct } from '../Controllers/productController.js';
import { authMiddleware } from '../Middlewares/authMiddleware.js';
import { adminMiddleware } from '../Middlewares/roleMiddleware.js';

const router = express.Router();

router.post("/create", authMiddleware, adminMiddleware, createProduct);
router.get("/", getAllProduct);
router.put('/update/:id', authMiddleware, adminMiddleware, updateProduct);
router.delete('/delete/:id', authMiddleware, adminMiddleware, deleteProduct);

export default router;