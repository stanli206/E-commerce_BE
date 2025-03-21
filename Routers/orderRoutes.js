import express from 'express';
import { authMiddleware } from '../Middlewares/authMiddleware.js';
import { placeOrder } from '../Controllers/orderController.js';

const router = express.Router();

router.post('/create', authMiddleware, placeOrder)

export default router;