# 🛒 FSD E-Commerce Backend (Node.js + Express.js)

This is the backend of a full-stack E-Commerce application built using **Node.js**, **Express.js**, and **MongoDB**. It supports **JWT-based Authentication**, **Admin/User Role-based Access**, **Product & Cart Management**, **Order Processing**, and **Stripe Payments**.

### 🔗 Live Backend URL  

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Stripe (Payments)
- bcrypt (Password hashing)
- Nodemailer (For future email support)
- CORS

---

## 📂 Project Structure

```
├── config/
│   └── db.js                  # MongoDB connection
│
├── controllers/              # All route controllers
│   ├── authController.js
│   ├── productController.js
│   ├── cartController.js
│   ├── orderController.js
│   └── paymentController.js
│
├── middlewares/
│   ├── authMiddleware.js     # JWT verification
│   └── roleMiddleware.js     # Admin/User access control
│
├── models/                   # Mongoose models
│   ├── User.js
│   ├── Product.js
│   ├── Cart.js
│   └── Order.js
│
├── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│   ├── cartRoutes.js
│   ├── orderRoutes.js
│   └── paymentRoutes.js
│
├── utils/                    # Utilities like mailer
│   └── emailConfig.js
```
---

## 🧪 Testing

Use tools like **Postman** or **Thunder Client** to test API endpoints.

---

