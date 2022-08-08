import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";
import axios from "axios";
const Hr = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const navigate= useNavigate();
      
        const updateEmail = (event) => {
          setEmail(event.target.value);
          console.log(event.target.value);
        };
        const updatePassword = (event) => {
          setPassword(event.target.value);
          console.log(event.target.value);
        };

         const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

        const btnClick = (event) => {
            event.preventDefault();
            const  data = {"userName" :email,"password":password }
            axios.post("http://localhost:8000/api/login",data).then((res)=>{
            // console.log("token : "+res.data.token)
            // console.log("user : "+res.data.userName)
            // console.log("UserPassword  : "+res.data.password)
            const user = {"email":res.data.userName,"password":res.data.password}
            sessionStorage.setItem("user",res.data.userName);
            sessionStorage.setItem("token",res.data.token);
            
            
            if (res.data)
            {
              swal({
              title: "YAAAY!",
              text: "Successfully Logged In",
              icon: "success",
          });
          navigate("/data");
            }else{
              swal({
                title: "Oops!",
                text: "Invalid email or Password!",
                icon: "error",
                  });
              navigate("/hr")
            }
        }).catch((err)=>{alert(err)})
        };
        const emailValid = () => {
       return !emailRegex.test(email) ?
         (
             <div style={{ color: "red", fontSize: 15, marginTop: ".2rem" }}> *please enter your valid Email</div>
          ) : (
            <div style={{ color: "green", fontSize: 15, marginTop: ".5rem" }}> This email is Valid </div>
          );
 };
  return (
    <>
    <div className='hr_comp_div'>
    <h4 className='hr_login'> HR LOGIN</h4>
      <form className='hr_form_div'>
      <input className='input_hr_div' type="email" name='email' value={email} onChange={updateEmail} placeholder='Enter your Email' autoCompleteType='off' required />
      
      <input className='input_hr_div' type="password" name='password' value={password} onChange={updatePassword} placeholder='Enter your password' required />

      <button className='btn_hr' type='submit'disabled={!email || !password} onClick={btnClick}> LOGIN
      </button>
      </form>
    </div>
    <ul 
    className='login_details'>
    <li> Email : {email}</li>
    <li> Password : {password} </li>
    </ul>
  </>)
}
export default Hr;
