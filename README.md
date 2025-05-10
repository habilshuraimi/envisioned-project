# 🔐 Role-Based Auth System – User & Admin (React + Node.js + MySQL)

This project is a full-stack authentication and authorization system that supports **user and admin login**, **JWT token-based authentication**, **role-based routing**, and **resume uploading**.

## 🚀 Tech Stack

### Frontend
- React.js (with React Router)
- Tailwind CSS
- Axios
- React Toastify
- Context API for Auth State Management

### Backend
- Node.js + Express
- MySQL
- Bcrypt (for password hashing)
- JWT (for token-based authentication)
- Multer (for resume file upload)


## 📌 Features

✅ User Registration and Login  
✅ Admin Login  
✅ Role-based Protected Routes  
✅ Resume Upload (PDF)  
✅ JWT Authentication stored in Cookies  
✅ Global Auth Context using React's Context API  
✅ Redirection logic for unauthorized access  
✅ Access control: users can't access admin dashboard & vice versa  
✅ Axios interceptor for auth token  
✅ Toast messages for feedback


## 📁 Folder Structure


project-root/
│
├── client/                   # Frontend (React)
│   ├── src/
│   │   ├── context/          # Auth context (UserContext)
│   │   ├── pages/            # Pages (Login, Register, Dashboard)
│   │   ├── routes/           # ProtectedRoute & RedirectIfAuthenticated
│   │   └── App.js            # Main app with routing
│
├── server/                   # Backend (Node.js)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── index.js              # Entry point

````

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/your-username/role-based-auth-system.git
cd role-based-auth-system

### 2️⃣ Backend Setup (Node.js + MySQL)

```bash
cd server
npm install
```

#### 🔧 Configure `.env`

Create a `.env` file inside `/server` and add:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=auth_db
JWT_SECRET=your_jwt_secret
```

#### 🛠️ Start Backend

```bash
npm start
```

Server will run at: [http://localhost:5000](http://localhost:5000)

---

### 3️⃣ Frontend Setup (React)

```bash
cd ../client
npm install
```

#### 🛠️ Start Frontend

```bash
npm start
```

Frontend will run at: [http://localhost:3000](http://localhost:3000)

---

## 🔐 Auth Flow

* On login success, JWT is returned and stored in cookies.
* User data is stored in Context via `UserProvider`.
* Protected routes (`/user/dashboard` or `/admin/dashboard`) are guarded using `ProtectedRoute`.
* Authenticated users are redirected away from login/register via `RedirectIfAuthenticated`.
* Context uses `useEffect` to persist login across reloads using cookies.

---

## 🔄 API Endpoints (Backend)

| Method | Endpoint        | Description        |
| ------ | --------------- | ------------------ |
| POST   | `/api/login`    | User/Admin login   |
| POST   | `/api/register` | User registration  |
| GET    | `/api/profile`  | Get logged-in user |
| POST   | `/api/upload`   | Upload user resume |

---

## 🧪 Testing Instructions

1. Register as a normal user
2. Login using the credentials
3. Try accessing `/admin/dashboard` manually (you will be redirected)
4. Log out
5. Login as admin
6. Try accessing `/user/dashboard` manually (you will be redirected)

---

## ✨ Contributions

Feel free to fork and improve the project. Pull requests are welcome!

---

## 📄 License

MIT License