# React + Vite Frontend

This project is a modern React frontend powered by **Vite** for fast development, with **Tailwind CSS** for styling and **React Router v6** for client-side routing. It's integrated with a **Node.js + MySQL backend**, supporting features like JWT authentication, user/admin login, protected routes, and resume uploads.

---

## 🔥 Tech Stack

* **React** (with Hooks)
* **Vite** (blazing-fast dev server)
* **Tailwind CSS** (utility-first CSS framework)
* **React Router v6** (nested routing)
* **Axios** (HTTP requests)
* **JWT-based Auth** (handled via backend)
* **Toastify** (notifications)
* **Context API** (global state for auth)
* **Role-based Routing** (admin/user dashboards)

---

## ✅ Features

* ✅ User & Admin Login with JWT
* ✅ Public and Protected Routes
* ✅ Resume Upload (via backend)
* ✅ Persistent Auth State using Context & localStorage
* ✅ Tailwind-based responsive UI
* ✅ Separate route handling for user and admin
* ✅ Toast notifications for actions

---

## 📁 Project Structure

```
client/
│
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   ├── context/            # Auth context
│   ├── pages/              # User/Admin pages
│   ├── routes/             # Route-level separation
│   ├── utils/              # Axios instance and helpers
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Tailwind CSS import
├── .env                    # Frontend environment variables
├── .gitignore
├── vite.config.js
└── package.json
```

---

## 🛠️ Installation & Running Locally

### Prerequisites

* Node.js v18+
* npm or yarn
* Backend running at `http://localhost:5000` (or change it in `.env`)

---

### 🚀 Setup Steps

```bash
# Clone the repository
git clone https://github.com/your-username/project-name.git
cd project-name/client

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will start on `http://localhost:5173`.

---

## 🔐 Environment Variables

Create a `.env` file in the `client/` root:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## ⚙️ Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |

---

## 📦 Linting and Formatting

You can expand ESLint for TypeScript or other rules:

```bash
npm install eslint eslint-plugin-react --save-dev
```

For TypeScript:

```bash
npm install typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

Configure `.eslintrc` accordingly.

---

## 📚 Resources

* [React Docs](https://reactjs.org)
* [Vite Docs](https://vitejs.dev)
* [Tailwind CSS](https://tailwindcss.com)
* [React Router](https://reactrouter.com)

---

## 🙌 Author

Made by [Your Name](https://github.com/your-username)