import { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("/api/admin/users");
        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching users:", err);
        toast.error("Failed to fetch users");
      }
    };

    fetchUsers();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("/api/admin/signout");
      toast.success("Logged out successfully");
      navigate("/admin/login");
    } catch (err) {
      console.error("Logout error:", err);
      toast.error("Logout failed. Please try again.");
    }
  };

const handleDownload = async (resumePath) => {
  try {
    const response = await axios.get(`/api/admin/resumes/${resumePath}`, {
      responseType: "blob", // Important for binary files
    });

    const blob = new Blob([response.data], { type: "application/pdf" });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", resumePath);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error("Error downloading resume:", error);
    toast.error("Failed to download resume");
  }
};


  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
      <h2 className="font-bold">User List</h2>
      <table className="min-w-full mt-4 border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Admin</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.isAdmin ? "Yes" : "No"}</td>
                <td className="border p-2">
                  {user.resumePath ? (
                   <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDownload(user.resumePath)}
                  >
                    Download Resume
                  </button>
                  ) : (
                    <span className="text-gray-500">No Resume</span>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center p-2">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
