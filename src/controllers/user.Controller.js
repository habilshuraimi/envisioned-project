import connection from "../config/db.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 



export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  connection.query(
    "INSERT INTO users (name, email, password, isAdmin) VALUES (?, ?, ?, FALSE)",
    [name, email, hashedPassword],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: "User created successfully" });
    }
  );
};


export const userLogin =(req,res)=>{
    const { email, password } = req.body;

  connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = results[0];
     if (user.isAdmin) return res.status(403).json({ message: "Not a user account" });
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign({ id: user.id, email: user.email, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.cookie("accessToken",token).status(200).json({ message: 'Login successful', token,user });
    });
  });
}
  export const uploadResume = (req, res) => {
  const userId = req.user.id; // or from token if you're using JWT auth

  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const filePath = req.file.filename;

  // Save file path in DB
  connection.query(
    "UPDATE users SET resumePath = ? WHERE id = ?",
    [filePath, userId],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      res.status(200).json({
        message: "Resume uploaded and saved successfully",
        file: filePath
      });
    }
  );
};

export const signOut = (req, res) => {
  res.clearCookie("accessToken").status(200).json({ message: "Logged out successfully" });
}

  

