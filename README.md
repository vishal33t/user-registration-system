# User Registration System

A full-stack User Registration System built using **Node.js**, **Express.js**, **MongoDB Atlas**, and **Vanilla JavaScript**. The application allows users to register, log in, view their profile, and securely authenticate using JSON Web Tokens (JWT).

---

## 🚀 Features

- User Registration
- User Login
- Secure Password Hashing using bcrypt
- JWT Authentication
- Protected Profile Route
- Server-side Input Validation
- MongoDB Atlas Database Integration
- Logout Functionality
- Responsive Frontend using HTML, CSS, and JavaScript

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- MongoDB Node.js Driver

### Authentication & Security
- JSON Web Token (JWT)
- bcryptjs
- express-validator

---

## 📂 Project Structure

```
User-Registration-System
│
├── backend
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   └── authController.js
│   ├── middleware
│   │   └── authMiddleware.js
│   ├── routes
│   │   └── authRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend
│   ├── css
│   │   └── style.css
│   ├── js
│   │   ├── config.js
│   │   ├── register.js
│   │   ├── login.js
│   │   └── profile.js
│   ├── index.html
│   ├── login.html
│   └── profile.html
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/user-registration-system.git
```

Move into the project

```bash
cd user-registration-system/backend
```

Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

DB_NAME=user_registration

JWT_SECRET=your_secret_key
```

---

## Run Backend

Development

```bash
npm run dev
```

Production

```bash
npm start
```

Backend will run on

```
http://localhost:5000
```

---

## Run Frontend

Open the **frontend** folder using **VS Code Live Server**.

or

Use any static web server.

Example:

```
http://127.0.0.1:5500/frontend/index.html
```

---

## API Endpoints

### Register User

**POST**

```
/api/auth/register
```

Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

---

### Login User

**POST**

```
/api/auth/login
```

Request Body

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

Returns

- JWT Token
- User Information

---

### User Profile

**GET**

```
/api/auth/profile
```

Headers

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## Authentication Flow

```
User Register
      │
      ▼
Password Hashed
      │
      ▼
Stored in MongoDB
      │
      ▼
Login
      │
      ▼
JWT Generated
      │
      ▼
Stored in Browser
      │
      ▼
Profile Request
      │
      ▼
JWT Verified
      │
      ▼
User Data Returned
```

---

## Security Features

- Password Hashing using bcrypt
- JWT Authentication
- Protected Routes
- Input Validation
- Duplicate Email Prevention
- Environment Variables for Sensitive Data

---

## Future Improvements

- Refresh Tokens
- Email Verification
- Forgot Password
- Password Reset
- User Profile Image Upload
- Role-Based Authentication
- Account Verification

---

## Screenshots

You can add screenshots here after deployment.

- Registration Page
- Login Page
- Profile Page

---

## Deployment

### Backend

Render

### Database

MongoDB Atlas

### Frontend

Netlify

---

## Author

**Vishal**

GitHub: https://github.com/your-username

LinkedIn: https://linkedin.com/in/your-profile

---

## License

This project is created for learning and internship purposes.