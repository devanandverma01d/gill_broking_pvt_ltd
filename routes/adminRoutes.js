import express from "express";
import { adminController } from "../controllers/adminController.js";

//router object
const router = express.Router()

router.post('/admin',adminController)

export default router     