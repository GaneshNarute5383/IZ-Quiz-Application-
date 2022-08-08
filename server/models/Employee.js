import mongoose from "mongoose";

// Defining Schema
const empSchema = new mongoose.Schema({
 
  q1_ans:{type:String, required:true, trim:true},
  q2_ans:{type:String, required:true, trim:true},
  q3_ans:{type:String, required:true, trim:true},
  q4_ans:{type:String, required:true, trim:true},
  q5_ans:{type:String, required:true, trim:true},
  q6_ans:{type:String, required:true, trim:true},
  q7_ans:{type:String, required:true, trim:true},
  q8_ans:{type:String, required:true, trim:true},
  q9_ans:{type:String, required:true, trim:true},
  q10_ans:{type:String, required:true, trim:true},
  q11_ans:{type:String, required:true, trim:true},
  q12_ans:{type:String, required:true, trim:true},
  q13_ans:{type:String, required:true, trim:true},
  q14_ans:{type:String, required:true, trim:true},
  q15_ans:{type:String, required:true, trim:true},
  q16_ans:{type:String, required:true, trim:true},
  q17_ans:{type:String, required:true, trim:true},
  q18_ans:{type:String, required:true, trim:true},
  q19_ans:{type:String, required:true, trim:true},
  q20_ans:{type:String, required:true, trim:true},
  q21_ans:{type:String, required:true, trim:true},
  q22_ans:{type:String, required:true, trim:true},
  q23_ans:{type:String, required:true, trim:true},
  q24_ans:{type:String, required:true, trim:true},
  q25_ans:{type:String, required:true, trim:true},
  q26_ans:{type:String, required:true, trim:true},
  q27_ans:{type:String, required:true, trim:true},
  q28_ans:{type:String, required:true, trim:true},
  q29_ans:{type:String, required:true, trim:true},
  q30_ans:{type:String, required:true, trim:true},
  q31_ans:{type:String, required:true, trim:true},
  q32_ans:{type:String, required:true, trim:true},
  q33_ans:{type:String, required:true, trim:true}
})

// Model 
const EmployeeModel = mongoose.model("employee_ans", empSchema)

export default EmployeeModel