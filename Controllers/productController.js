import Product from '../models/Products.js';

// Create a product
export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all products
export const getAllProduct = async (req, res) => {
  try {
    const getProductDetail = await Product.find();
    res.status(200).json({ data: getProductDetail });
  } catch (error) {
    console.log(error);
  }
};

// Update a product
export const updateProduct = async (req, res) => { 
  try {
    const productId = req.params.id;
    const { name, description, price, stock, image } = req.body;
    
    const updateProduct = await Product.findByIdAndUpdate(
      productId,
      { name, description, price, stock, image },
      { new: true }
    );

    if (!updateProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product updated successfully", data: updateProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Delete a product
export const deleteProduct = async (req, res) => { 
  try {
    const productId = req.params.id;
    const deleteProduct = await Product.findByIdAndDelete(productId);

    if (!deleteProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}