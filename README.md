# 📝 TaskFlow SaaS Backend

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

A scalable, multi-tenant Task Management API built with **Node.js**, **Express**, and **MongoDB**. Designed for high performance and secure data isolation in a SaaS environment.

---

## 🚀 Key Features

* **🛡️ Multi-tenant Security** – Logical data isolation ensures users only access their own data.
* **🔑 Secure Auth** – JWT-based authentication with Bcrypt password hashing.
* **⚡ Task Orchestration** – Full CRUD functionality for complex workflows.
* **🛡️ API Protection** – Integrated Helmet, CORS, and Rate Limiting for production safety.

---

## 📁 Project Structure



* **config/** — Database & environmental configurations
* **controllers/** — Core business logic & route handlers
* **middleware/** — Authentication guards & error handlers
* **models/** — Mongoose schemas & data validation
* **routes/** — API endpoint definitions
* **server.js** — Application entry point
* **.env** — Private environment variables
* **.gitignore** — Deployment exclusion list

---

## ⚙️ Setup & Installation

### 1. Prerequisites
* Node.js (v18.0.0+)
* MongoDB instance (Local or Atlas)

### 2. Installation & Dependencies
Run the following commands in your root directory:
* `npm install express mongoose dotenv cors helmet bcryptjs jsonwebtoken`
* `npm install --save-dev nodemon morgan`

### 3. Environment Variables (.env)
Create a file named `.env` and configure:
* `PORT=5000`
* `MONGODB_URI=your_mongodb_uri`
* `JWT_SECRET=your_secret_key`

### 4. Running the App
* **Development:** `npm run dev` (uses nodemon)
* **Production:** `npm start`

---

## 📡 API Roadmap

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/auth/register` | Create a new account | No |
| **POST** | `/api/auth/login` | Authenticate & get token | No |
| **GET** | `/api/tasks` | Fetch all user tasks | **Yes** |
| **POST** | `/api/tasks` | Create a new task | **Yes** |
| **PATCH** | `/api/tasks/:id` | Update task status | **Yes** |
| **DELETE** | `/api/tasks/:id` | Permanent deletion | **Yes** |

---

## 🛡️ Security Standards

* **Password Hashing:** Utilizing Bcrypt with a salt factor of 10.
* **Token Security:** Stateless JWT authentication via Bearer strategy.
* **Sanitization:** Automatic Mongoose sanitization against NoSQL injection.
