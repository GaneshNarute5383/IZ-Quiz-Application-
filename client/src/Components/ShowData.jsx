
import { useState, useEffect } from "react";
import axios from "axios";
function ShowData() {
  
  const [students, setStudents] = useState([])
  useEffect(()=>{
    async function getAllStudent(){
      try {
        const students = await axios.get("http://localhost:8000/api/emp")
        console.log(students.data)
        setStudents(students.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllStudent()
  }, [])
  
  return (
    
    <div >
       <h1>Connect React JS to Express JS</h1>
      {
        students.map((student, i)=>{
          console.log(student)
         
          return (
            <h2 key={i}>{student.q_no} {student.q_ans}</h2>
          )
        })
      }
      
    </div>
  );
}

export default ShowData;

