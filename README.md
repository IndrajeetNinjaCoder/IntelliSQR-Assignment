# 📦 Full Stack MERN Auth App

A full-stack MERN (MongoDB, Express.js, React, Node.js) authentication application with login and registration functionality. The frontend is built with React and Tailwind CSS. The backend provides REST APIs for user authentication.

---

## 📁 Project Structure

```
root/
├── backend/     # Node.js + Express + MongoDB
├── frontend/    # React + Tailwind CSS
```

---

## 🧰 Tech Stack

### Frontend
- React
- Tailwind CSS
- React Hook Form (optional)
- Fetch API

### Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)
- JWT Authentication
- bcrypt for password hashing

---

## 🔧 Setup Instructions

### ✅ Prerequisites

- Node.js and npm installed
- MongoDB running locally or Atlas URI

---

## 🚀 How to Run the Project Locally

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/mern-auth-app.git
cd mern-auth-app
```

---

## 🔙 Backend Setup (`/backend`)

### 📁 Navigate to backend directory

```bash
cd backend
```

### 📦 Install dependencies

```bash
npm install
```

### ⚙️ Environment variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### ▶️ Run the backend server

```bash
npm start
```

Server will run on `http://localhost:5000`

---

## 🌐 Frontend Setup (`/frontend`)

### 📁 Navigate to frontend directory

```bash
cd ../frontend
```

### 📦 Install dependencies

```bash
npm install
```

### ▶️ Run the React app

```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

> Make sure backend is running on port 5000 or update the API base URL accordingly.

---

## 🔐 API Endpoints

- `POST /api/users/login` – Login with email and password
- `POST /api/users/register` – Register with email and password

Example JSON:

```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

---

## ✨ Features

- Register and login users
- Form validation
- Error handling
- Toggle between login and signup
- Responsive UI with Tailwind CSS