import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    title:{
        type:String,
        requuired:true,
    },
    description:{
        type:String,
        requuired:true,
    },
    image:{
        type:String,
        requuired:true,
    },
},{timestamps:true})

const adminModel = mongoose.model('admin',adminSchema)
export default adminModel;