const express=require('express');
const router =express.Router();

const { createTodo } = require("../controller/createTodo");
const {leloTodo}=require("../controller/getTodo")
const {leloIdKeSath}=require("../controller/getTodoById")
const {updatedAt}=require("../controller/updateTodo")

router.post("/createTodo",createTodo);
router.get("/getTodo",leloTodo);
router.get("/getTodo/:idty",leloIdKeSath);
router.put("/updateTodo/:idty",updatedAt)

module.exports=router;
