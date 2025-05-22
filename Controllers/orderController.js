import Order from "../Models/Order.js";
import Cart from "../Models/Cart.js";
import sendEmail from "../utils/mailer.js";
import Product from "../Models/Products.js";

// Place Order
export const placeOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate(
      "items.product"
    );

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Your cart is empty" });
    }

    const totalPrice = cart.items.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );

    const order = new Order({
      user: req.user._id,
      products: cart.items,
      totalPrice,
      status: "Pending",
    });

    await order.save();

    if (cart) {
      await Cart.findOneAndDelete({ user: req.user._id });
    }

    try {
      const userEmail = req.user.email;
      await sendEmail(
        userEmail,
        "Order Confirmation",
        `Your order of $${totalPrice} is confirmed!`
      );
    } catch (emailError) {
      console.log("Email sending failed:", emailError.message);
    }

    res.status(200).json({ message: "Order Placed Successfully", order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update status
export const markOrderAsPaid = async (req, res) => {
  try {
    // Find the most recent order of the logged-in user
    const latestOrder = await Order.findOne({ user: req.user._id }).sort({
      createdAt: -1,
    }); // latest order

    if (!latestOrder) {
      return res.status(404).json({ message: "No orders found" });
    }

    latestOrder.status = "Confirmed"; // or "Paid" if you prefer
    latestOrder.paidAt = new Date(); // Optional: add this field if you want
    await latestOrder.save();

    res
      .status(200)
      .json({ message: "Order marked as paid", order: latestOrder });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Orders (Admin)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user")
      .populate("products.product");

    res.status(200).json({ message: "All Orders", data: orders });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Orders By User
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate(
      "products.product"
    );

    res.status(200).json({ message: "My Orders", data: orders });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Order Status (Admin Only)
export const updateOrderStatus = async (req, res) => {
  try {
    const orderId = req.params.id;
    const { status } = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    if (!updatedOrder)
      return res.status(404).json({ message: "Order Not Found" });

    res
      .status(200)
      .json({ message: "Order Status Updated", data: updatedOrder });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
