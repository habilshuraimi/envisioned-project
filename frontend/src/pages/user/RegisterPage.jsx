import { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("/api/register", { name, email, password });
      navigate("/user/login");
    } catch (err) {
      alert("Registration failed");
      console.log(err,"error");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Register</h1>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="border p-2 mb-2 w-full" />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 mb-2 w-full" />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2 mb-2 w-full" />
      <button onClick={handleRegister} className="bg-green-500 text-white p-2 w-full rounded">Register</button>
    </div>
  );
}