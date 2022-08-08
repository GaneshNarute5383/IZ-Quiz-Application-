import React, { useState } from 'react';
import MyVerticallyCenteredModal from "../Components/Modal";
import { useNavigate } from "react-router-dom";
import Quiz from './Quiz';

const Employee = () => {
    const [agree, setAgree] = useState();
    const [modalShow, setModalShow] = useState(false);
    const [isShown, setIsShown] = useState(false);

    const navigate= useNavigate();

    const checkboxHandler = () => {
        setAgree(!agree);
    };

    const btnHandler = () => { 
        navigate('/quiz');
        setIsShown(true)
    };
  return (
    <>
    <div className='container'>
                <div className="privacy">
                    <h2> <input className="checkbox" type="checkbox" id="agree" onChange={checkboxHandler} />
                        I would like to participate in the survey.I agree to the<button className='privacy_btn' onClick={() => setModalShow(true)} to="/modal">privacy policy</button>and conditions of participation.</h2>
                </div>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

                {
                    agree ? <button type='submit' className="glow-on-hover" onClick={() => btnHandler()}> Proceed
                    </button> : ""
                }

            </div>
            </>

  )
}

export default Employee