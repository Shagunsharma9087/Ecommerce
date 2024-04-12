const express=require('express')
const router=express.Router();

const {login,register,productadd,getallproduct,getOneType,getOneemailinfo,placeOrder}=require('../controller/taskControler');
const { getallproducts } = require('../controller/taskControler');
const { jwtAuthMiddleware } = require('../jwt');
router.post("/login",login)
router.post("/register",register)
router.post("/productadd",productadd)
router.get("/getallproduct",getallproduct)
router.get("/getOneType",getOneType)       
router.get("/getOneemailinfo",getOneemailinfo)
router.post("/placeOrder",placeOrder)
module.exports=router;