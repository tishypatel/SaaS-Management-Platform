# 📝 TaskFlow SaaS Backend

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

A scalable, organization-based multi-tenant Task Management API built with **Node.js**, **Express**, and **MongoDB**. Designed for secure data isolation, workspace-level tenancy, and SaaS-ready architecture.

---

## 🚀 Key Features

- 🛡️ Organization-Based Multi-Tenancy – Each user is assigned a private workspace (tenant) with complete data isolation.
- 🔑 Secure Authentication – JWT-based auth with Bcrypt password hashing.
- 🏢 Workspace Management – Automatic organization creation on user registration.
- ⚡ Task Orchestration – Full CRUD functionality scoped to tenant workspaces.
- 🛡️ API Protection – Integrated Helmet, CORS, and centralized middleware.
- 📦 Modular Architecture – Clean separation of models, routes, and controllers.

---

## 📁 Project Structure

- config/ — Database & environment configuration
- controllers/ — Core business logic
- middlewares/ — Authentication & request validation
- models/ — Mongoose schemas (User, Organization, Task)
- routes/ — REST API endpoints
- server.js — Application entry point
- .env — Environment variables
- .gitignore — Ignored files

---

## ⚙️ Setup & Installation

### 1. Prerequisites

- Node.js v18+
- MongoDB (Local or Atlas)

---

### 2. Install Dependencies

Run in project root:

```bash
npm install
```

---

### 3. Environment Variables (.env)

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secure_random_secret
```

---

### 4. Run the Application

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

Server runs at:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### 🔐 Authentication

| Method | Endpoint           | Description                           | Auth |
| ------ | ------------------ | ------------------------------------- | ---- |
| POST   | /api/auth/register | Register new user (creates workspace) | No   |
| POST   | /api/auth/login    | Login & get JWT                       | No   |
| GET    | /api/auth/me       | Get current user                      | Yes  |

---

### 📋 Tasks (Tenant Scoped)

| Method | Endpoint       | Description         | Auth |
| ------ | -------------- | ------------------- | ---- |
| GET    | /api/tasks     | Get workspace tasks | Yes  |
| POST   | /api/tasks     | Create task         | Yes  |
| PATCH  | /api/tasks/:id | Update task         | Yes  |
| DELETE | /api/tasks/:id | Delete task         | Yes  |

All task operations are scoped to the user’s organization.

---

## 🧪 Testing

You can test APIs using:

- Postman
- Insomnia
- Hoppscotch

Make sure headers include:

```
Content-Type: application/json
Authorization: Bearer <token>
```

---

## 🛡️ Security Standards

- Password hashing using Bcrypt (10 rounds)
- Stateless JWT authentication (Bearer tokens)
- Organization-level data isolation
- Protected routes with middleware
- Secure HTTP headers via Helmet
- Environment-based secret management

---

## 📈 Roadmap

- Team invitations & roles
- Role-based access control (RBAC)
- Pagination & filtering
- File uploads
- Activity logs
- Deployment (Docker / Cloud)
- Billing-ready schema
