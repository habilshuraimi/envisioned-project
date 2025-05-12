import { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const res = await axios.post("/api/admin/login", { email, password });
       const adminUser = res.data.admin;``
      setUser(res.data.admin); 
      console.log(user)
  if (adminUser.isAdmin==1) {
    navigate("/admin/admin-dashboard");
  } else {
    navigate("/user/dashboard");
  }
      toast.success(`Successfully logged in`);
    } catch (err) {
      toast.error("Login failed: " + err.response?.data?.message || err.message);
      console.log(err);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Admin Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white p-2 w-full rounded"
      >
        Login
      </button>
    </div>
  );
}
