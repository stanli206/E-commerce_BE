import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            quantity: Number,
        }
    ],
    totalPrice: Number,
    status: { type: String, enum: ["Pending", "Completed"], default: "Pending" },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;