import React, { useState } from "react";
import { Questions } from "./Questions";
import swal from "sweetalert";
import axios from "axios";
const Quiz = () => {
  const [currQues, setCurrQues] = useState(0);
  const [Q1ans, setQ1ans] = useState();
  const [Q2ans, setQ2ans] = useState();
  const [Q3ans, setQ3ans] = useState();
  const [Q4ans, setQ4ans] = useState();
  const [Q5ans, setQ5ans] = useState();
  const [Q6ans, setQ6ans] = useState();
  const [Q7ans, setQ7ans] = useState();
  const [Q8ans, setQ8ans] = useState();
  const [Q9ans, setQ9ans] = useState();
  const [Q10ans, setQ10ans] = useState();
  const [Q11ans, setQ11ans] = useState("")

    const [Q12ans, setQ12ans] = useState("")

    const [Q13ans, setQ13ans] = useState("")

    const [Q14ans, setQ14ans] = useState("")

    const [Q15ans, setQ15ans] = useState("")

    const [Q16ans, setQ16ans] = useState("")

    const [Q17ans, setQ17ans] = useState("")

    const [Q18ans, setQ18ans] = useState("")
    const [Q19ans, setQ19ans] = useState("")

    const [Q20ans, setQ20ans] = useState("")

    const [Q21ans, setQ21ans] = useState("")

    const [Q22ans, setQ22ans] = useState("")

    const [Q23ans, setQ23ans] = useState("")

    const [Q24ans, setQ24ans] = useState("")

    const [Q25ans, setQ25ans] = useState("")

    const [Q26ans, setQ26ans] = useState("")

    const [Q27ans, setQ27ans] = useState("")

    const [Q28ans, setQ28ans] = useState("")

    const [Q29ans, setQ29ans] = useState("")

    const [Q30ans, setQ30ans] = useState("")

    const [Q31ans, setQ31ans] = useState("")

    const [Q32ans, setQ32ans] = useState("")
    const [Q33ans, setQ33ans] = useState("")
    const inputRef = React.useRef(null);

    // const [active, setActive] = useState(true)
    // const[isChecked, setIsChecked] = useState(false)

  const nextQues = () => {
   setCurrQues(currQues + 1)
   inputRef.current.value = '';
  //  setActive(true)
  //  setIsChecked(false)
  };
  const previousQues = () => {
    setCurrQues(currQues - 1);
  };
  const alertSuccess = () => {
    swal({
      title: "Thank You!",
      text: "For participating in the survey",
      icon: "success",
    });
  };
  const updateAnswer = (event) => {
    // if(event.target.value == ""){
    //   setActive(true)
    // }else{
    //   setActive(false)

    // }
  
    var Qno = Number(currQues) + 1;


    
    console.log("Q no : " + Qno);
    console.log("value is:", event.target.value);

    if (Qno === 1) {
      setQ1ans(event.target.value);
     
    } else if (Qno === 2) {
      setQ2ans(event.target.value);
      
    } else if (Qno === 3) {
      setQ3ans(event.target.value);
     
    } 
    else if (Qno === 4) {
      setQ4ans(event.target.value);
    }
    else if (Qno === 5) {
      setQ5ans(event.target.value);
    } else if (Qno === 6) {
      setQ6ans(event.target.value);
    } else if (Qno === 7) {
      setQ7ans(event.target.value);
    } else if (Qno === 8) {
      setQ8ans(event.target.value);
    } else if (Qno === 9) {
      setQ9ans(event.target.value);
    } else if (Qno === 10) {
      setQ10ans(event.target.value);
    }else if (Qno === 11) {
        setQ11ans(event.target.value);
        
      } else if (Qno === 12) {
        setQ12ans(event.target.value);
       
      } else if (Qno === 13) {
        setQ13ans(event.target.value);
        
      } else if (Qno === 14) {
        setQ14ans(event.target.value);
      
      } else if (Qno === 15) {
        setQ15ans(event.target.value);
      } else if (Qno === 16) {
        setQ16ans(event.target.value);
      } else if (Qno === 17) {
        setQ17ans(event.target.value);
      } else if (Qno === 18) {
        setQ18ans(event.target.value);
      } else if (Qno === 19) {
        setQ19ans(event.target.value);
      }else if (Qno === 20) {
        setQ20ans(event.target.value);
        
      } else if (Qno === 21) {
        setQ21ans(event.target.value);
       
      } else if (Qno === 22) {
        setQ22ans(event.target.value);
        
      } else if (Qno === 23) {
        setQ23ans(event.target.value);
      
      } else if (Qno === 24) {
        setQ24ans(event.target.value);
      } else if (Qno === 25) {
        setQ25ans(event.target.value);
      } else if (Qno === 26) {
        setQ26ans(event.target.value);
      } else if (Qno === 27) {
        setQ27ans(event.target.value);
      } else if (Qno === 28) {
        setQ28ans(event.target.value);
      }else if (Qno === 29) {
          setQ29ans(event.target.value);
          
        } else if (Qno === 30) {
          setQ30ans(event.target.value);
         
        } else if (Qno === 31) {
          setQ31ans(event.target.value);
          
        } else if (Qno === 32) {
          setQ32ans(event.target.value);
        
        } else if (Qno === 33) {
          setQ33ans(event.target.value);
        } 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //    const data1 = {"q_name":Questions[currQues].title}
    const data = {
      q1_ans: Q1ans,
      q2_ans: Q2ans,
      q3_ans: Q3ans,
      q4_ans: Q4ans,
      q5_ans: Q5ans,
      q6_ans: Q6ans,
      q7_ans: Q7ans,
      q8_ans: Q8ans,
      q9_ans: Q9ans,
      q10_ans: Q10ans,
      q11_ans: Q11ans,
      q12_ans: Q12ans,
      q13_ans: Q13ans,
      q14_ans: Q14ans,
      q15_ans: Q15ans,
      q16_ans: Q16ans,
      q17_ans: Q17ans,
      q18_ans: Q18ans,
      q19_ans: Q19ans,
      q20_ans: Q20ans,
      q21_ans: Q21ans,
      q22_ans: Q22ans,
      q23_ans: Q23ans,
      q24_ans: Q24ans,
      q25_ans: Q25ans,
      q26_ans: Q26ans,
      q27_ans: Q27ans,
      q28_ans: Q28ans,
      q29_ans: Q29ans,
      q30_ans: Q30ans,
      q31_ans: Q31ans,
      q32_ans: Q32ans,
      q33_ans: Q33ans,
    };
    console.log(data);
    axios
      .post("http://localhost:8000/api/insert", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form className="quiz_div" onSubmit={handleSubmit}>
        <div className="Quiz_heading">{Questions[currQues].title} </div>
        <h6 className="ques_div"> {Questions[currQues].prompt}</h6>

        {currQues === Questions.length - 32 ||
        currQues === Questions.length - 23 ||
        currQues === Questions.length - 24 ||
        currQues === Questions.length - 13 ||
        currQues === Questions.length - 8 ||
        currQues === Questions.length - 2 ||
        currQues === Questions.length - 1 ? (
          <textarea
            type="message"
            name="answer"
            id="=ans0"
            onChange={updateAnswer}
            ref={inputRef}
            placeholder="Type your message here"
            className="msg_input"
            required
          />
        ) : (
          <>
            <div className="actions">
              <ul type="none" className="order_div">
                <li>
                  <input
                    type="radio"
                    name="answer"
                    id="ans1"
                    className="answer"
                    value={Questions[currQues].optionA}
                    onClick={updateAnswer}
                    ref={inputRef}
                    required
                  />
                  <label className="label_div" for="ans1" id="option1">
                    {" "}
                    {Questions[currQues].optionA}{" "}
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="answer"
                    id="ans2"
                    className="answer"
                    value={Questions[currQues].optionB}
                    onClick={updateAnswer}
                    ref={inputRef}
                    required
                  />
                  <label className="label_div" for="ans2" id="option1">
                    {Questions[currQues].optionB}
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="answer"
                    id="ans3"
                    className="answer"
                    value={Questions[currQues].optionC}
                    onClick={updateAnswer}  
                    ref={inputRef}
                    required
                  />
                  <label className="label_div" for="ans3" id="option1">
                    {" "}
                    {Questions[currQues].optionC}{" "}
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="answer"
                    id="ans5"
                    className="answer"
                    value={Questions[currQues].optionD}
                    onClick={updateAnswer}      
                    ref={inputRef}
                    required
                  />
                  <label className="label_div" for="ans4" id="option1">
                    {" "}
                    {Questions[currQues].optionD}{" "}
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="answer"
                    id="ans4"
                    className="answer"
                    value={Questions[currQues].optionE}
                    onClick={updateAnswer}
                    ref={inputRef}
                    required
                  />
                  <label className="label_div" for="ans5" id="option1">
                    {" "}
                    {Questions[currQues].optionE}{" "}
                  </label>
                </li>
                {Questions[currQues].optionF ? (
                  <li>
                    <input
                      type="radio"
                      name="answer"
                      id="ans4"
                      className="answer"
                      value={Questions[currQues].optionF}
                      onClick={updateAnswer}
                      ref={inputRef}
                      required
                    />
                    <label className="label_div" for="ans5" id="option1">
                      {" "}
                      {Questions[currQues].optionF}{" "}
                    </label>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </div>
          </>
        )}
        <div className="n_p_btns">
          {currQues === Questions.length - 33 ? (
            ""
          ) : (
            <button className="forward" onClick={previousQues}>
              {" "}
              Previous
            </button>
          )}

          {currQues === Questions.length - 1 ? (
            <button className="forward" onClick={alertSuccess}>
              {" "}
              Finish
            </button>
          ) : (
            <button
            type="reset"
              className="forward"
              onClick={() => nextQues()}
            >
              Next
            </button>
          )}
        </div>
      </form>

      {/* <div classname="text_data">{ans}</div> */}
    </>
  );
};
export default Quiz;
