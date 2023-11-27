import adminModel from "../models/adminModel.js";

export const adminController=async(req,res)=>{
    try {
        const{title,description,image} = req.body;
        if(!title||!description||!image){
            return res.status(400).json({
                success:false,
                message:'All fields are required',
            })
        }
        const admin = new adminModel({title,description,image}).save()
        return res.status(200).json({
            success:true,
            message:'Post is created successfully!',
            admin:{title,description,image}
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success:false,
            message:'Error in Admin API',
            error
        })
    }
}

export const getPostController=async(req,res)=>{
    try {
        const getAllPost = await adminModel.find({})
        return res.status(200).json({
            success:true,
            message:"Got all post successfully",
            getAllPost

        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success:false,
            message:'Error in get Post Api'
        })
    }
}