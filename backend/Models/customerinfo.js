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
  },
  role:{
    type:String,
    default: "regularuser",
  }
});
CustomerSchema.methods.addOrder = function (OrderId) {
  this.orders.push(OrderId);
  return this.save();
};
const CustomerModel=mongoose.model("customerinfo",CustomerSchema)
module.exports=CustomerModel