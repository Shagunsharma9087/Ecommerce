const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
  Customerid: {
    type: Schema.Types.ObjectId,
    ref: "customerInfo",
  },
  product:[
    {
      productId:
      {
        type: Schema.Types.ObjectId,
        ref: "product",
      },
      quantity:
      {
        type: Number,
        default:1,
      }

    }
  ],
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