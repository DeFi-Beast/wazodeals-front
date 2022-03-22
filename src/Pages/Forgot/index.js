import { useState, useEffect } from "react";
import LayoutLogin from "../../Components/Layouts/LayoutLogin";
import { StyledDiv, StyledLogo } from "../../Components/Logo/Logo";
import Classes from "../../Styles/Login.module.css";
import Logbg from "../../Assets/Logbg.png";
import LoginLogo from "../../Assets/Loginlogo.png";
import axios from "axios";
import Loader from "../../Components/Loader";
import { connect } from "react-redux";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const Forgot = ({ dispatch }) => {
  const [showText, setShowText] = useState(false);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [code, setCode] = useState("");
  const [userId, setUserId] = useState("")
  const [activated, setActivated] = useState(false);

  

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    let queryObj = {
      email: email,
      
    };
  
  };

  return (
    <LayoutLogin>
      <div className={Classes.Wrapper}>
        <div className={Classes.LogoWrapper}>
          <StyledDiv>
            <img src={Logbg} alt="amoeba"></img>
          </StyledDiv>

         <Link to={"/"}>
         <StyledLogo src={LoginLogo}></StyledLogo>
         </Link> 
        </div>

        <div className={Classes.formContainer}>
          <form
            action="/forgot"
            onSubmit={handleSubmit}
            method="POST"
            
          >
            <h1>Forgot Password</h1>
            {/* <div>{success &&  <p>{message}</p>}</div> */}

            <div>
              
                   <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
             
            </div>

            <button type="submit" className={Classes.button}>
              {show ? (
                <div>
                  <Loader></Loader>
                </div>
              ) : (
                "Reset Password"
              )}
            </button>
          </form>
        </div>
      </div>
    </LayoutLogin>
  );
};

export default Forgot;
