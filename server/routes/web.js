import express from 'express';
import EmployeeController from '../controllers/EmployeeController.js';
import LoginController from '../controllers/LoginController.js';
import jsonwebtoken from "jsonwebtoken"
import e from 'express';
const router = express.Router();
var jwtKey ="e-comm"
router.get('/emp',verifyToken, EmployeeController.getAllDoc)
router.post('/insert', EmployeeController.insertDoc)
router.post("/login",LoginController.loginUser)

function verifyToken(req,res,next){
    let token = req.headers['authorization'];
    jsonwebtoken.verify(token,jwtKey,(err,valid)=>{
        if(err){
            res.send("null")
        }else
        {
            next();
        }
    });
  

  }
export default router

