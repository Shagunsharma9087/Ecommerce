const express=require('express')
const router=express.Router();

const {login,register,productadd,getallproduct,getOneType}=require('../controller/taskControler');
const { getallproducts } = require('../controller/taskControler');
router.post("/login",login)
router.post("/register",register)
router.post("/productadd",productadd)
router.get("/getallproduct",getallproduct)
router.get("/getOneType",getOneType)        
module.exports=router;