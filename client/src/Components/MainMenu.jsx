import { React, useContext } from "react"
import { QuizContext } from "./Contexts"
import styled from 'styled-components';

const MainMenu = () => {
  return (
    <>
    <Menu className='menu'> 
         
         </Menu>
    </>
  )
}

export default MainMenu;
const Menu = styled.div`
border: none;
width: 60rem;
height: 20rem;
display: flex;
flex-direction: column;
justify-content: center !important;
align-self: center;
background: blue;
color: #fff;
border-radius: 2rem;
box-sizing: content-box;
margin-left: 7rem;
`