
import './App.css'
import HomePage from './frontend/HomePage';
import LoginCard from './frontend/LoginCard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupPage from './frontend/SignupPage';
import TaskCard from './components/TaskCard.jsx';
import CustomNavbar from './components/Navbar.jsx';


function App() {
  

    return (
     
      <Router>
        <CustomNavbar/>
        <TaskCard/>
          <Routes>
            <Route path="/" element={<LoginCard></LoginCard>}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/signup" element={<SignupPage />}></Route>
          </Routes>

        </Router>
      
    );
  }
  
  

export default App
