const mongoose=require('mongoose');
require('dotenv').config();
 const dbDatabase=()=>{
    mongoose.connect(process.env.DATABASE_URL,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true

        }
        )
        .then(()=>{console.log("Database Connected Successfully")})
        .catch((error)=>{
            console.log("connected failed")
            console.error(error.message);
            process.exit(1);
        })
 }

 module.exports=dbDatabase;