const mongoose = require("mongoose")

const schemaModel = new mongoose.Schema({
    firstName:{
      type:String,
      required:true,
      trim:true
    },
    lastName:{
      type:String,
      required:true,
      trim:true
    },
    gender:{
      type:String,
      required:true,
    },
    email:{
      type:String,
      required:true,
      trim:true
    },
    phone:{
      type:Number,
      required:true,
      trim:true
    },
    password:{
      type:String,
      required:true,
      trim:true
    },
    cpassword:{
      type:String,
      required:true,
      trim:true
    },
    token:{
      type:String
    }

  } ,
  // it , timestamps tells at what time the data is stored and updated
  {timestamps: true});

const userSchema = new mongoose.model("userSchema", schemaModel)
module.exports = userSchema ;