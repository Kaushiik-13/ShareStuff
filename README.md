# 🧩 ShareStuff – Peer-to-Peer Item Rental Platform

## 🧠 Overview

**ShareStuff** is a full-stack peer-to-peer (P2P) rental platform that enables users to share, rent, or lend items locally.  
It bridges the gap between people who own rarely used items and those who temporarily need them — helping communities save money, reduce waste, and promote sustainable living.

---

## 🎯 Objective

To build a scalable, secure, and intuitive web application where users can list personal items for rent, and others can browse, request, and rent them for specific durations.  
The system manages verification, bookings, and reviews, providing a seamless and trustworthy experience.

---

## 🧩 Problem Statement

Many people own valuable items they seldom use — like cameras, bikes, or projectors.  
Others need such items occasionally but purchasing them outright is impractical.  
**ShareStuff** solves this by enabling item owners to rent out unused items and allowing renters to access them affordably through a trusted, verified platform.

---

## 📦 Scope of the Project

- Users can list items with title, description, images, price per day, and availability.
- Renters can browse and search for items by category, location, and price range.
- Rental requests can be sent with specific start and end dates.
- Item owners can approve or reject requests.
- A review and rating system promotes trust and community feedback.
- Seller profiles and listed items are verified for authenticity.

---

## ⚙️ Tech Stack

| Layer | Technology | Reason for Choice |
|-------|-------------|-------------------|
| **Frontend** | Next.js | SEO, SSR/SSG, excellent performance, modern React-based ecosystem |
| **Backend** | NestJS | Modular, TypeScript-first, scalable, and enterprise-ready |
| **Database** | MySQL | Reliable relational database with ACID compliance |
| **ORM** | TypeORM / Prisma | Simplifies migrations and schema synchronization |
| **Styling** | Tailwind CSS | Responsive and fast UI development |
| **Authentication** | JWT | Secure, stateless authentication |
| **Deployment** | Vercel (Frontend) + Render / AWS (Backend) | Scalable, CI/CD ready |
| **Version Control** | Git + GitHub | For collaboration and version tracking |

---

## 🧱 Database Design

### Design Principles
- UUIDs (CHAR(36)) are used for all entities for distributed scalability.
- Soft deletes implemented via `is_deleted` flags for data retention.
- Indexed foreign keys and searchable fields for faster lookups.
- Supports clear 1:N and N:1 relationships across entities.

### Major Entities
1. **Users** – Basic user info, verification status, linked with login credentials.  
2. **Sellers_Profile** – Stores seller bio, verification documents, and statistics.  
3. **Items** – Contains details like title, price, description, condition, and status.  
4. **Item_Images** – Stores multiple image references for each item.  
5. **Cart** – Temporarily holds items users intend to rent.  
6. **Rental_Requests** – Manages buyer–seller interactions, status, and rental periods.  
7. **Reviews** – Maintains feedback and ratings from renters to owners.  
8. **Logins** – Manages user credentials and login activity.

---

## 🧩 Relationships Overview

| Relationship | Description |
|---------------|--------------|
| `users` ↔ `logins` | One-to-One (Credentials) |
| `users` ↔ `sellers_profile` | One-to-One (Seller info) |
| `sellers_profile` ↔ `items` | One-to-Many (Seller listings) |
| `items` ↔ `item_images` | One-to-Many (Item photos) |
| `users` ↔ `cart` | One-to-Many (User’s cart items) |
| `users` ↔ `rental_requests` | One-to-Many (Buyer requests) |
| `items` ↔ `rental_requests` | One-to-Many (Requests per item) |
| `reviews` ↔ `items` | One-to-Many (Item reviews) |
| `reviews` ↔ `users` | One-to-Many (Reviewer link) |

---

## 🔐 Authentication & Authorization Flow

1. **User Signup/Login**
   - Stored securely using hashed passwords (bcrypt).
   - Generates JWT token upon login for session management.

2. **Roles**
   - Two main roles: **Buyer** and **Seller**.
   - Role-based access managed through NestJS Guards and middleware.

3. **Protected Routes**
   - JWT authentication middleware ensures only verified users access secured endpoints.

---

## ⚙️ System Architecture

**Architecture Type:** Modular Monolithic (with microservice-ready design)

**Layers:**
- **Controllers** – Handle HTTP requests and route mapping.
- **Services** – Core business logic and data validation.
- **Repositories** – Database operations (CRUD) via ORM.
- **DTOs** – Type-safe data transfer between layers.
- **Guards/Interceptors** – Manage authentication, authorization, and response handling.

This modular structure ensures maintainability and allows easy scaling into microservices.

---

## 🔁 User Flow Summary

1. User signs up or logs in.  
2. Sellers complete profile verification by uploading ID and necessary details.  
3. Sellers list items with title, price, description, and images.  
4. Buyers browse or filter items by category, location, or price.  
5. Buyers send rental requests for desired items and dates.  
6. Sellers approve or reject requests.  
7. Rental is confirmed, and item exchange occurs.  
8. After completion, renters leave a review and rating.

---

## 🧠 Performance & Scalability

- Indexed foreign keys for optimized query performance.  
- Soft deletes instead of hard removal for data integrity.  
- Optional Redis caching for frequent lookups.  
- Connection pooling via ORM to handle concurrent database access.  
- Pagination for browsing and listing APIs.  
- Structured error handling and validation at the service layer.

---

## ⚙️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/yourusername/sharestuff.git
cd sharestuff

# Install dependencies for backend
cd backend
npm install

# Start the backend server
npm run start:dev

# Setup and start the frontend
cd ../frontend
npm install
npm run dev
```
---

## 🧑‍💻 Developer Information

**Developer:** Kaushiik Arul  
**Email:** [akkaushiik@gmail.com](mailto:akkaushiik@gmail.com)  
**Tech Stack:** Next.js · NestJS · MySQL · Tailwind CSS  

---

## 📜 License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute it with attribution.

---
