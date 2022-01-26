import { useState, useEffect } from "react";
import LayoutLogin from "../../Components/Layouts/LayoutLogin";
import { StyledDiv, StyledLogo } from "../../Components/Logo/Logo";
import Classes from "../../Styles/Login.module.css";
import Logbg from "../../Assets/Logbg.png";
import LoginLogo from "../../Assets/Loginlogo.png";
import axios from "axios";
import Loader from "../../Components/Loader";
// import {Redirect} from 'react-router-dom';
import { connect } from "react-redux";
import { redAction } from "../../Helper/Action";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import BaseURL from "../../Components/Helper"


const Activate = ({ dispatch }) => {
  const [showText, setShowText] = useState(false);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("hi");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [userId, setUserId] = useState("")
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  });

  console.log(email, code);

  const handleSubmit = (e) => {
    setShow(true);
    e.preventDefault();
    let queryObj = {
      email: email,
      code: code,
    };
    axios.patch(`${BaseURL}/activate`, queryObj).then(
      (response) => {
        var result = response.data;
        setShow(false);
        console.log(result);
        setMessage(result);
        setActivated(result.success);
        console.log(result);
        if (result.success) {
          console.log(result.success);
          console.log(result.success);
          localStorage.setItem("token", result.token )
          localStorage.setItem("userId", result.userId )
          setUserId(result.userId)

          Swal.fire(
            '',
            'You\'ve earned 100 points!',
            'Refer more to earn more',
            'Thank You for Signing Up!!!'
          )
          // dispatch(redAction(result.email));
          // localStorage.setItem("email", result.email )
          window.location.replace(`/user/${result.userId}`);
          // props.history.push('/')
        }
      },
      (error) => {
        console.log(error);
        setShow(false);
        setMessage(error.message);
      }
    );
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

        {/* {activated &&
          Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )} */}
        {/* <div>{message}</div> */}
        <div className={Classes.formContainer}>
          <form
            action="/Activate"
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
          >
            <h1>Complete Your Registration</h1>
            <p>A code has been sent to your mail!!</p>

            <div>
              {/* <input type="text" name="username" id="username" placeholder="username"  /> */}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                name="code"
                id="code"
                placeholder="Enter code sent to your mail"
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
                "Activate"
              )}
            </button>
          </form>
        </div>
      </div>
    </LayoutLogin>
  );
};

export default Activate;
