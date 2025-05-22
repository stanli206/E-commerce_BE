import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
  try {
    const { items } = req.body;

    console.log("Received items:", items);

    const line_items = items.map((item) => {
      if (!item.product || !item.product.price) {
        throw new Error("Invalid product data - Missing product or price");
      }

      return {
        price_data: {
          currency: "usd",
          product_data: { name: item.product.name },
          unit_amount: Math.round(item.product.price * 100),
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: "https://onlineekart.netlify.app/Success",
      cancel_url: "https://onlineekart.netlify.app/cancel",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};
