const Todo =require('../models/Todo')

const leloIdKeSath=async(req,res)=>{
    try{
    
        const idm=req.params.idty;
        const response=await Todo.findById({_id:idty});
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
module.exports={leloIdKeSath};





