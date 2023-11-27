import mongoose from "mongoose"
import colors from 'colors';
export const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Connected to mongoDB ${mongoose.connection.host}`.bgMagenta.white)
    } catch (error) {
        console.log(`Failed to connect to mongoDB ${error}`.bgRed.white)
    }
}