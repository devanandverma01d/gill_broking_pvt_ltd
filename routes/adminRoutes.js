import express from "express";
import { adminController, getPostController } from "../controllers/adminController.js";

//router object
const router = express.Router()

router.post('/admin',adminController)

router.get('/getallpost',getPostController)

export default router     