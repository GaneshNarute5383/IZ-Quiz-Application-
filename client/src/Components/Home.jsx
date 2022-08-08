import React from 'react';
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <>
          <div className='bg_home'>
          <nav className='home_div'>
         
          <Link to="/hr" className='hr_emp_btn'> HR
          </Link>
          <Link to="/emp" className='hr_emp_btn1'> EMPLOYEE
          </Link>
          </nav>
          </div>
      
        </>
    )
}

export default Home;