import express from 'express';
import { adminLogin,getAllUsers,signOut,downloadResume } from '../controllers/admin.Controller.js';
import { adminAuth, auth } from '../middlware/auth.js';
import path  from 'path'
const router = express.Router();


router.post('/login', adminLogin)
router.get('/users',auth,adminAuth, getAllUsers);
router.get('/resumes/:filename',downloadResume)
router.post('/signout',signOut)

export default router;