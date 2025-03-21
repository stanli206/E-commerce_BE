import Order from "../Models/Order.js";
import Cart from "../Models/Cart.js";
import sendEmail from "../utils/mailer.js";

export const placeOrder = async (req, res) => { 
    try {
        const cart = await Cart.findOne({ user: req.user._id }).populate("items.product");

        if(!cart || cart.items.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }

        const totalPrice = cart.items.reduce(
            (acc, item) => acc + item.product.price * item.quantity,
            0
        );

        const order = new Order({
            user: req.user._id,
            products: cart.items,
            totalPrice,
            status: "pending",
        });
        await order.save();

        // Ensure cart is deleted only if it exists
        if (cart) {
            await Cart.findByIdAndDelete({ user: req.user._id });
        }

        try {
            const userEmail = req.user.email;
            await sendEmail(
                userEmail,
                "Order Confirmation",
                `Your order has been placed successfully. Total price: ${totalPrice}`
            );
        } catch (emailError) {
            console.log("Error sending Failed: ", emailError.message);
            
        }

        res.status(200).json({ message: "Order placed successfully", order });

    } catch (error) {
        res.status(500).json({ message: "Failed to place order", error: error.message });
    }
};