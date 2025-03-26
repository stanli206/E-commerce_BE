# 🛒 FSD E-Commerce Backend (Node.js + Express.js)

This is the backend of a full-stack E-Commerce application built using **Node.js**, **Express.js**, and **MongoDB**. It supports **JWT-based Authentication**, **Admin/User Role-based Access**, **Product & Cart Management**, **Order Processing**, and **Stripe Payments**.

### 🔗 Live Backend URL  
[https://fsd-backend-demo-b17.onrender.com](https://fsd-backend-demo-b17.onrender.com)

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

## 🛡️ API Endpoints

### 🔐 Authentication

| Method | Route                     | Description          |
|--------|---------------------------|----------------------|
| POST   | `/api/auth/register`      | Register user        |
| POST   | `/api/auth/login`         | Login & get token    |

---

### 📦 Products

| Method | Route                       | Access  |
|--------|-----------------------------|---------|
| GET    | `/api/products`             | Public  |
| POST   | `/api/products/create`      | Admin   |
| PUT    | `/api/products/update/:id`  | Admin   |
| DELETE | `/api/products/delete/:id`  | Admin   |

---

### 🛒 Cart

| Method | Route                         | Description           |
|--------|-------------------------------|-----------------------|
| GET    | `/api/cart/view`              | View Cart             |
| POST   | `/api/cart/add`               | Add to Cart           |
| DELETE | `/api/cart/remove/:productId` | Remove from Cart      |
| PUT    | `/api/cart/update/:productId` | Update quantity       |

---

### 📦 Orders

| Method | Route                        | Description             |
|--------|------------------------------|-------------------------|
| POST   | `/api/orders/create`         | Place Order             |
| GET    | `/api/orders/my-orders`      | View User Orders        |
| GET    | `/api/orders/`               | Admin - View All Orders |
| PUT    | `/api/orders/update/:id`     | Admin - Update Status   |

---

### 💳 Payments

| Method | Route                       | Description            |
|--------|-----------------------------|------------------------|
| POST   | `/api/payments/checkout`    | Stripe Payment Session |

---

## 🔐 User Roles

- **Admin**
  - Manage products
  - View and update all orders

- **Customer**
  - Add/remove items to cart
  - Place orders and pay

---

## 🧪 Testing

Use tools like **Postman** or **Thunder Client** to test API endpoints.

---

## 📦 Environment Variables

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
EMAIL_USER=example@gmail.com
EMAIL_PASS=EMAIL PASS
```

---

## 📌 Author

- 👨‍💻 Developed by [Thiru-cse](https://github.com/Thiru-cse)
- Part of FSD Demo Project - B17
