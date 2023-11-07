const express = require('express')
const app = express();
require('./db/connect');
const cookieParser = require('cookie-parser')
const userSchema = require('./db/schema')
const cors = require("cors")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const secret_key_Jwt = 'Zaeem123.xyeem123.'

app.use(express.json())
app.use(cors({
  origin:"http://localhost:3000",
  credentials: true
}));
app.use(cookieParser());
app.post('/signin', async(req, res)=>{
  
  let token;
  const {email, password} = req.body; 
  if (!email || !password) {
    return res.status(400).json({error:"Please Fill all the fields"})
  }else{
    const userData=await userSchema.findOne({email:email})
    console.log(userData)
    if (!userData) {
    return  res.status(400).json("Invalid Email")
    }
    const comparePassword = await bcrypt.compare(password,userData.password);
    if (!comparePassword) {
      return res.status(400).json({error:"Invalid email Or password"})
    }else{
       token=  jwt.sign({email:userData.email}, secret_key_Jwt, {expiresIn: "1h"}, (err, token)=>{
        if (err) {
          console.log(err)
        }
        res.cookie('usertoken', token, {
          httpOnly:true
        })
        userData.token = token;
        userData.save();
        res.status(200).json({message:'User SignIn Successfuly and token is genrated'});
       } ); 
    }
  }}
);

app.post('/signup',async(req, res)=>{
  
  try {
    const{firstName, lastName, gender, email, phone, password, cpassword} = req.body;
    const userExist = await userSchema.findOne({email:email});
    if (userExist) {
      return res.status(400).json("User Already exsit")
    }else{
      const passwordHashed= await bcrypt.hash(password, 12)
      const addingUsers =await new userSchema({firstName, lastName, gender, email, phone, password:passwordHashed, cpassword:passwordHashed});
      console.log(req.body)
      const savingUsers = await addingUsers.save();
      res.send(savingUsers);
    }
  
  } catch (error) {
    console.log(error)
  }

});

// const aboutAuthentication = async(req, res, next)=>{
//   try {
//     const tokenValue = req.cookies.userToken;
//     if (!tokenValue) {
//     console.log("No token found") 
//     res.status(400).json({error: "No token found for login"})     
//     }
//     const verify_token = jwt.verify(tokenValue, secret_key_Jwt);
//     const tokenUserData = await userSchema.findOne({
//       _id : verify_token.user.id,
//       token :tokenValue
//     })
//     req.token= token;
//     req.tokenUserData = tokenUserData
//     next()
//   } catch (error) {
//     // console.log(error)
//     res.status(400).json({error:"User Authentication Failed"})
//   }
// }

const userAuth= async(req, res, next)=>{
  try {
    const tokenValue = req.cookies.userToken;
    if (!tokenValue) {
      console.log("No token Found")
      res.status(401).json({message:"User Login is Required"})
    }
    const verify_token= jwt.verify(tokenValue, secret_key_Jwt);
    const tokenUserdata = await userSchema.findOne({
      _id: verify_token.userSchema.id,
      token: tokenValue,
    });

    if (!tokenUserdata) {
      console.log(`user not found`);
      res.status(401).json({message:"Not Authenticated"})
    }

    req.token = tokenValue;

    req.tokenUserdata = tokenUserdata;

    next();
  } catch (error) {
    res.status(401).json({ error: "authentication failed" });
    console.log(error);
  }
}

app.get('/about',userAuth , (req,res)=>{
  res.send('this is about page')
})


app.listen(5001, ()=>{
    console.log('I am listening on port 5001')
})