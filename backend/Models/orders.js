const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
  CustomerId: {
    type: Schema.Types.ObjectId,
    ref: "customerInfo",
  },
  product:{
    type:Array,
  },
  totalprice:{
    type:Number,
  },
  Address:{
    type:String,
  },
  OrderAt: {
    type: Date,
    default: Date.now,
  },
});
const OrderModel=mongoose.model("Order",orderSchema)
module.exports=OrderModel