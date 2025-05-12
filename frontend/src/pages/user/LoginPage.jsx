import { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [user,setUser] = useState(null)
  const handleLogin = async () => {
    try {
      const res = await axios.post("/api/login", { email, password });
      const userData = res.data.user
      toast.success("Successfully logged in");
      console.log(res)
      setUser(res.data.user); 
      console.log(user)
  if (userData.isAdmin==0) {
    navigate("/user/dashboard");
  } else {
        navigate("/user/login");
  }
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message || "Login failed. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          User Login
        </h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Login
        </button>
      </div>
    </div>
  );
}
