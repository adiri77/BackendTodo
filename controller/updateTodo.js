const Todo =require('../models/Todo')

const updatedAt=async(req,res)=>{
    try{
    
        const idm=req.params.idty;
        const {title,description}=req.body;
        const response=await Todo.findByIdAndUpdate({_id:idm},
            {title,description,updatedAt:Date.now()}
            );
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
module.exports={updatedAt};





