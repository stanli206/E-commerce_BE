import Product from '../models/Products.js';

export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
 
export const getAllProduct = async (req, res) => {
  try {
    const getProductDetail = await Product.find();
    res.status(200).json({ data: getProductDetail });
  } catch (error) {
    console.log(error);
  }
};