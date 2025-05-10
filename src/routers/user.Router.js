import express from 'express';
import {createUser,userLogin,uploadResume,signOut} from '../controllers/user.Controller.js';
import upload from '../middlware/multer.js';
import { auth } from '../middlware/auth.js';

const router = express.Router();

router.post('/register', createUser);
router.post('/login', userLogin);
router.post('/upload-resume',auth, upload.single('resume'), uploadResume);
router.post('/signout', signOut);



export default router;