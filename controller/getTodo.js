const Todo =require('../models/Todo')

const leloTodo=async(req,res)=>{
    try{
    
        const response=await Todo.find({});
        res.status(200).json({
            success:true,
            data:response,
            message:"Database Extracted"
        })
    }
    catch{
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            
            success:false,
            data:"Error occurs",
            message:err.message
        })
    }
}
module.exports={leloTodo};





