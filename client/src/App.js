import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data from './Components/Data';
import Employee from './Components/Employee';
import Header from './Components/Header';
import Home from './Components/Home';
import Hr from './Components/Hr';
import Policy from './Components/Policy';
import Quiz from './Components/Quiz';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="hr" element={<Hr />} />
        <Route path="modal" element={<Policy />} />
        <Route path="emp" element={<Employee />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="data" element={<Data />} />
      </Routes>
    
    </BrowserRouter>
    
    </>

  )
}

export default App;