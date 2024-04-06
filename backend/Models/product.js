const mongoose=require('mongoose')
const Schema = mongoose.Schema;
const productSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  type:{
    type:String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number, 
  },
  rating:{
    type:Number,
  }
});
const ProductModel=mongoose.model("products",productSchema)
module.exports=ProductModel