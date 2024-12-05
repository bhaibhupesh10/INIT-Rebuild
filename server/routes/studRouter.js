import express from 'express';
import {register, login, logout, getStudProfile, updateStudProfile, updateStudPassword} from '../controllers/studentController.js';
import { isStudAuthenticated } from '../middlewares/auth.js';

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/logout", isStudAuthenticated, logout);
router.get("/profile", isStudAuthenticated, getStudProfile); //first isStudAuthenticated will run then getStudProfile will run
//Hence getStudProfile can access information from isStudAuthenticated

//Updating Profile
router.put("/profile/update", isStudAuthenticated, updateStudProfile);
router.put("/profile/update-password", isStudAuthenticated, updateStudPassword);


export default router;


