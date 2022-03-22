import { useState, useEffect } from "react";
import LayoutLogin from "../../Components/Layouts/LayoutLogin";
import { StyledDiv, StyledLogo } from "../../Components/Logo/Logo";
import Classes from "../../Styles/Login.module.css";
import Logbg from "../../Assets/Logbg.png";
import LoginLogo from "../../Assets/Loginlogo.png";
import axios from "axios";
import Loader from "../../Components/Loader";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const Reset = ({ dispatch }) => {
  const [showText, setShowText] = useState(false);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const [success, setSuccess] = useState(false);
  const [userId, setUserId] = useState("")
 

  

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    let queryObj = {
      
      newPassword: password,
      confirmPassword: confirmPassword,
      token: code,
      
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
            <h1>Reset Password</h1>
            {/* <div>{success &&  <p>{message}</p>}</div> */}

            <div>
              
                   <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
          
              
                   <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
                   <input
                type="text"
                name="code"
                id="code"
                placeholder="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
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

export default Reset;
