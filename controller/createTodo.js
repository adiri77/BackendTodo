const Todo =require('../models/Todo')

module.exports={
createTodo: async(req,res)=>{
    try{
        const {title,description}=req.body;
        const response=await Todo.create({title,description});
        res.status(200).json({
            success:true,
            data:response,
            message:"Database Created"
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
}}



