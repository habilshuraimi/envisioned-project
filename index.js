import express from 'express';
import dotenv from 'dotenv';
import userRouter from './src/routers/user.Router.js';
import adminRouter from './src/routers/admin.Router.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true, 
}));

// ✅ Serve uploads
app.use('/uploads/resumes', express.static(path.join(__dirname, 'uploads', 'resumes')));

// ✅ API routes
app.use('/api', userRouter);
app.use('/api/admin', adminRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
