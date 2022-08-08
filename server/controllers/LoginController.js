import LoginModel from '../models/Login.js'
import jsonwebtoken from'jsonwebtoken'
import { json } from 'express';

class LoginController {  
  static loginUser = async (req,res) =>{
    try {
        const  user = String(req.body.userName);
        const pass = String(req.body.password);
      
        const data = {userName:user,password:pass}
        let result = await LoginModel.findOne(data)
        console.log(result)
        var session;
        const jwtKey = "e-comm" 

        if(result != null)
        {        
          var userName = result.userName;
          var password = result.password
          //  session = req.session
          //  session.userid = user;
          //  console.log(req.session)

          
          jsonwebtoken.sign({result},jwtKey,(err,token)=>{
            if(err){
              res.send("  User not found  ")
            }else{
              res.send({userName:userName,password:password,token:token})}
            })           
        }
        else{
          res.send(false)
      }
     
    } catch (error) {
      console.log(error)
    }
  }
}
export default LoginController

