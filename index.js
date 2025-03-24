import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Config/dbConfig.js';
import authRoutes from './Routers/authRoutes.js';
import productRoutes from './Routers/productRoutes.js';
import cartRoutes from './Routers/cartRoutes.js';
import orderRoutes from './Routers/orderRoutes.js';
import paymentRoutes from './Routers/paymentRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payments', paymentRoutes);

const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})