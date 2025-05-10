import { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboard() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const uploadResume = async () => {
    if (!file) {
      toast.warn("Please select a file first");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("resume", file);
      await axios.post("/api/upload-resume", formData);
      toast.success("Resume uploaded successfully");
    } catch (err) {
      console.error("Upload error:", err);
      toast.error("Failed to upload resume");
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post("/api/signout");
      toast.success("Logged out successfully");
      navigate("/user/login");
    } catch (err) {
      console.error("Logout failed:", err);
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">User Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
      <input
        type="file"
        onChange={e => setFile(e.target.files[0])}
        className="mb-4"
      />
      <button
        onClick={uploadResume}
        className="bg-blue-600 text-white p-2"
      >
        Upload Resume
      </button>
    </div>
  );
}
