import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../IZLogo.png";

const Header = () => {
  return (
    <>
    <div className='header'>
    <Link to="/">
    <img src={Logo} alt='Intelizign' />
    </Link>
   
</div>
    </>
 
  )
}

export default Header