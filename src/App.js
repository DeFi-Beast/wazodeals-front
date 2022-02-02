// import logo from './logo.svg';
// {/* <img src={logo} className="App-logo" alt="logo" /> */}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import ErrorPage from "./Pages/ErrorPage";
import Food from "./Pages/Food";
import Home from "./Pages/Home";
import Login from "./Pages/Login";


import Register from "./Pages/Register";

import Activate from "./Pages/Activate";
import User from "./Pages/User";
import Users from "./Pages/Users";
import Forgot from "./Pages/Forgot"; 
import Reset from "./Pages/Reset"; 
import Discount from "./Pages/Discount";

function App() {



  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/food" element={<Food />}></Route>
          <Route path="/login" element={<Login />}></Route>
          
          <Route path="/register" element={<Register />}></Route>
  
          <Route path="/activate" element={<Activate />}></Route>
          {/* <Route path="/logout" element={<Activate />}></Route> */}
          <Route path="/discount" element={<Discount />}></Route>
          <Route path="/user" element={<Users />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/reset-password" element={<Reset />} />
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
