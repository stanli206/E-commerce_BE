import Cart from '../Models/Cart.js';
import Product from '../Models/Products.js';

// Add to Cart
export const addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        let cart = await Cart.findOne({ user: req.user._id });

        if (!cart) {
            cart = new Cart({ user: req.user._id, items: [], totalPrice: 0 });
        }

        const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ product: productId, quantity: quantity });
        }

        cart.totalPrice += product.price * quantity;
        await cart.save();
        res.status(200).json({ message: "Added to cart successfully", cart });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
 }

// View Cart
export const viewCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user._id }).populate("items.product");
        if(!cart) {
            return res.status(404).json({ message: "Cart is empty" });
        }
        res.status(200).json({message: "Cart fetched successfully", data: cart});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
 
// Remove from Cart

// Update Cart