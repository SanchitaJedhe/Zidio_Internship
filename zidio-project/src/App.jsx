
import './App.css'
import HomePage from './frontend/HomePage';
import LoginCard from './frontend/LoginCard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  

    return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginCard></LoginCard>}></Route>
          <Route path="/home" element={<HomePage/>}></Route>
        </Routes>

      </Router>
      
    );
  }
  
  

export default App
