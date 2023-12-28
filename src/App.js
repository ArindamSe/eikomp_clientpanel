
import './App.css';

import LoginPage from './Component/LoginPage/LoginPage';
import SignupPage from './Component/LoginPage/SignupPage';
import {  Routes, Route } from "react-router-dom";
function App() {
  return (
   <>
   
    <Routes>
        
        <Route path="/" element={<LoginPage />} />
          <Route path="Signup" element={<SignupPage />} />
          
       
      </Routes>
   </>
  );
}

export default App;
