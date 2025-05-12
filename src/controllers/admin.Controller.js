import connection from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const adminLogin = (req, res) => {
  const { email, password } = req.body;
  connection.query(
    "SELECT * FROM users WHERE email = ? AND isAdmin = TRUE",
    [email],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });

      if (results.length === 0)
        return res.status(403).json({ message: "Admin not found" });

      const admin = results[0];
        if (!admin.isAdmin) return res.status(403).json({ message: "Not an admin account" });
      bcrypt.compare(password, admin.password, (err, isMatch) => {
        if (!isMatch)
          return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign(
          { id: admin.id, email: admin.email, isAdmin: admin.isAdmin },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );

        res.cookie("accessToken",token).status(200).json({ message: "Admin login successful", token, admin });
      });
    }
  );
};
export const getAllUsers = (req, res) => {
  connection.query("SELECT * FROM users WHERE isAdmin = FALSE", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};


export const downloadResume = (req, res) => {
  const filePath = path.join(__dirname, "..","..", "uploads", req.params.filename);

  if (fs.existsSync(filePath)) {
    res.download(filePath); 
  } else {
    res.status(404).json({ error: "File not found" });
  }
};

export const signOut = (req, res) => {
  res.clearCookie("accessToken").status(200).json({ message: "Logged out successfully" });
};