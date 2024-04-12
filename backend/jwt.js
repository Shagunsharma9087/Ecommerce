const jwt=require('jsonwebtoken');
const secretKey='1234'
const jwtAuthMiddleware=(req,res,next)=>{
    const authorization=req.headers.authorization
    if(!authorization ) return res.status(401).json({error:'token not found'})
    const token=req.headers.authorization.split(' ')[1];
console.log("hell",token);
    if(!token) return res.status(401).json({error:'Unauthorized'});
    try{
        console.log("token is" ,token);
       const data =jwt.verify(token,secretKey)
       console.log(data);
        next();
    }
    catch(err)
    {
        console.error(err);
        res.status(406).json({"error":"error a raha ha"});
    }
}
const generateToken=(userData)=>{
    return jwt.sign(userData,secretKey,{expiresIn:30000000})
}
module.exports={jwtAuthMiddleware,generateToken}