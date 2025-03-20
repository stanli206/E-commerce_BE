import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Config/dbConfig.js';
import authRoutes from './Routers/authRoutes.js';
import productRoutes from './Routers/productRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use('/api/products', productRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})