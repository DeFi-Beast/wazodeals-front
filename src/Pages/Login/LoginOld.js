import { useState } from "react";
import LayoutLogin from "../../Components/Layouts/LayoutLogin";
import { StyledDiv, StyledLogo } from "../../Components/Logo/Logo";
import Classes from "../../Styles/Login.module.css";
import Logbg from "../../Assets/Logbg.png";
import LoginLogo from "../../Assets/Loginlogo.png";
import  Loader  from "../../Components/Loader";
import axios from "axios";
import { Link } from "react-router-dom";
import BaseURL from "../../Components/Helper"
import { useDispatch, useSelector } from 'react-redux'
;


const Login = () => {
  const [showText, setShowText] = useState(false);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()






  const handleSubmit = (e) => {
    setShow(true);
    e.preventDefault();
    let queryObj = {
      email: email,
      password: password,
    };

    console.log(email)
    console.log(password)
   
   
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
            action="/login"
            method="POST"
            target="/"
            onSubmit={handleSubmit}
          >
            <div></div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className={Classes.button}>
            {show ? (
                <div>
                  <Loader></Loader>
                </div>
              ) : (
                "Login"
              )}
            </button>
          </form>
          <div className={Classes.formExtended}>
            <a href="/forgot-password" className={Classes.styledLink}>
              Forgot Password?{" "}
            </a>
            <div>
              Don't Have An Account?
              <span>
                <a className={Classes.styledLink} href="/register">
                  Sign Up
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </LayoutLogin>
  );
};

export default Login;
