import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Config/dbConfig.js';
import authRoutes from './Routers/authRoutes.js';
import productRoutes from './Routers/productRoutes.js';
import cartRoutes from './Routers/cartRoutes.js';
import orderRoutes from './Routers/orderRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})