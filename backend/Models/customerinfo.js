const mongoose=require('mongoose')
const Schema = mongoose.Schema;
const CustomerSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email:{
    type:String,
    unique:true,
  },
  password: {
    type: String,
  },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "orders",
    },
  ],
  Totalamount:{
    Type:Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});
const CustomerModel=mongoose.model("customerinfo",CustomerSchema)
module.exports=CustomerModel