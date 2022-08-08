import mongoose from "mongoose";

// Defining Schema
const empSchema = new mongoose.Schema({
  userName:{type:String, required:true, trim:true, unique:true},
  password:{type:String, required:true, trim:true},
})

// Model 
const LoginModel = mongoose.model("login", empSchema)
export default LoginModel

