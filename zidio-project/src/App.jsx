

import HomePage from './frontend/HomePage';
import LoginCard from './frontend/LoginCard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupPage from './frontend/SignupPage';


function MainApp() {
    return (
     
      <Router>
        
          <Routes>
            <Route path="/" element={<LoginCard></LoginCard>}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/signup" element={<SignupPage />}></Route>
          </Routes>
          
          
          
          
        </Router>
      
    );
  }

export default MainApp
