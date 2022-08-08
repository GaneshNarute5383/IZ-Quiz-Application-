import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import ShowData from "./ShowData";

const Data = () => {
  const[user, setUser] = useState(false)
  const navigate = useNavigate();

 
  function handelLogOut(){
    sessionStorage.removeItem("token");
    navigate("/");
  }



// data display
  const [emp, setEmp] = useState([]);
  useEffect(() => {
    async function getAllEmployee() {

      try {
        const config = {
          headers: {
            authorization: sessionStorage.getItem("token"),
          },
        };
        const emp = await axios.get("http://localhost:8000/api/emp",config);

        console.log(emp.data);
        if(emp.data != null){
          setEmp(emp.data);
        }
        else{
          navigate("/hr")
        }
        
      } catch (error) {
        console.log(error);
      }
    }
    getAllEmployee();
  }, []);

  return (
    <>
      <div className="data_div" style={{ textAlign: "center", marginTop: "8rem",marginLeft: "1rem" }}>
        {/* <div style={{ textAlign: "center", marginTop: "5rem" }}>Data</div> */}
        {/* <button className="logout_btn"> Logout</button> */}

        {emp.map((emp, i) => {
          // console.log(student)

          return (
            <div>
              <div class="container" style={{display:"flex",marginRight:300}}>
                <table class="table table-light table-hover" style={{ background: "#DBEDFA"}}>
                  <thead>
                    <tr>
                      <th>Id </th>
                      <th>Q.1 Ans</th>
                      <th>Q.2 Ans</th>
                      <th>Q.3 Ans</th>
                      <th>Q.4 Ans</th>
                      <th>Q.5 Ans</th>
                      <th>Q.6 Ans</th>
                      <th>Q.7 Ans</th>
                      <th>Q.8 Ans</th>
                      <th>Q.9 Ans</th>
                      <th>Q.10 Ans</th>
                      <th>Q.11 Ans</th>

                      <th>Q.12 Ans</th>
                      <th>Q.13 Ans</th>
                      <th>Q.14 Ans</th>
                      <th>Q.15 Ans</th>
                      <th>Q.16 Ans</th>
                      <th>Q.17 Ans</th>
                      <th>Q.18 Ans</th>
                      <th>Q.19 Ans</th>
                      <th>Q.20 Ans</th>
                      <th>Q.21 Ans</th>
                      <th>Q.22 Ans</th>
                      <th>Q.23 Ans</th>
                      <th>Q.24 Ans</th>
                      <th>Q.25 Ans</th>
                      <th>Q.26 Ans</th>
                      <th>Q.27 Ans</th>
                      <th>Q.28 Ans</th>
                      <th>Q.29 Ans</th>
                      <th>Q.30 Ans</th>
                      <th>Q.31 Ans</th>
                      <th>Q.32 Ans</th>
                      <th>Q.33 Ans</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{emp._id}</td>
                      <td>{emp.q1_ans}</td>
                      <td> <textarea style={{ padding: "1rem"}} value={emp.q2_ans}> </textarea></td>
                      <td>{emp.q3_ans}</td>
                      <td>{emp.q4_ans}</td>
                      <td>{emp.q5_ans}</td>
                      <td>{emp.q6_ans}</td>
                      <td>{emp.q7_ans}</td>
                      <td>{emp.q8_ans}</td>
                      <td>{emp.q9_ans}</td>
                      <td> <textarea style={{ padding: "1rem"}} value={emp.q10_ans}> </textarea></td>
                      <td> <textarea style={{ padding: "1rem"}} value={emp.q11_ans}> </textarea></td>
                      <td>{emp.q12_ans}</td>
                      <td>{emp.q13_ans}</td>
                      <td>{emp.q14_ans}</td>
                      <td>{emp.q15_ans}</td>
                      <td>{emp.q16_ans}</td>
                      <td>{emp.q17_ans}</td>
                      <td>{emp.q18_ans}</td>
                      <td>{emp.q19_ans}</td>
                      <td>{emp.q20_ans}</td>
                      <td> <textarea style={{ padding: "1rem"}} value={emp.q21_ans}> </textarea></td>
                      <td>{emp.q22_ans}</td>
                      <td>{emp.q23_ans}</td>
                      <td>{emp.q24_ans}</td>
                      <td> <textarea style={{ padding: "1rem"}} value={emp.q25_ans}> </textarea></td>
                      <td> <textarea style={{ padding: "1rem"}} value={emp.q26_ans}> </textarea></td>
                      <td>{emp.q27_ans}</td>
                      <td>{emp.q28_ans}</td>
                      <td>{emp.q29_ans}</td>
                      <td>{emp.q30_ans}</td>
                      <td>{emp.q31_ans}</td>
                      <td> <textarea style={{ padding: "1rem"}} value={emp.q32_ans}> </textarea></td>
                      <td> <textarea style={{ padding: "1rem"}} value={emp.q33_ans}> </textarea></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
         <button onClick={handelLogOut}>LogOut</button>
      </div>
    </>
  );
};

export default Data;
