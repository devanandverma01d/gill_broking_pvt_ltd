import express from "express";
import dotenv from 'dotenv';
import colors from 'colors';
import adminRoutes from './routes/adminRoutes.js'
import { connectDB } from "./config/db.js";
//configure dotenv
dotenv.config()

//configure databse
connectDB()


//rest object
const app = express()

//middlewares
app.use(express.json())

//routes
app.use(adminRoutes)

//PORT
const PORT = process.env.PORT||8000
//listen the server at specific port
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`.bgCyan.white)
})