import { useState } from "react";
import LayoutLogin from "../../Components/Layouts/LayoutLogin";
import { StyledDiv, StyledLogo } from "../../Components/Logo/Logo";
import Classes from "../../Styles/Login.module.css";
import Logbg from "../../Assets/Logbg.png";
import LoginLogo from "../../Assets/Loginlogo.png";
import axios from "axios";
import  Loader  from "../../Components/Loader";
// import {Redirect} from 'react-router-dom';
import { connect } from "react-redux";
import { redAction } from "../../Helper/Action";
import { Link , useLocation} from "react-router-dom";
import BaseURL from "../../Components/Helper"
import Swal from "sweetalert2";



const Register = ({dispatch}) => {
  const [showText, setShowText] = useState(false);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("hi");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referrer, setReferrer] = useState("");
  const [username, setUsername] = useState( new URLSearchParams(useLocation().search).get('user'));
  

  // const useQuery = () => new URLSearchParams(useLocation().search);
  // const username = useQuery().get('user');

  

  console.log(username)
  console.log(email,password)


  const handleSubmit = (e) => {
    setShow(true);
    e.preventDefault();
    let queryObj = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      referrer:referrer || username
    };
  
    axios.post(`${BaseURL}/register`, queryObj).then(
      (response) => {
        var result = response.data;
        setShow(false)
        console.log(result)
        setMessage(result)
        console.log(result);
        if(result.success){
          console.log(result.success)
          console.log(result.success)
          // dispatch(redAction(result.email));
          localStorage.setItem("email", result.email )
          window.location.replace(`/activate`);
          // props.history.push('/')
        }

      },
      (error) => {
        console.log(error);
        setShow(false)
        setMessage(error.message)
        Swal.fire(
          `server busy, TRY LATER!!`,
          '',
          
        )
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
        {/* <div>{message}</div> */}
        <div className={Classes.formContainer}>
          <form
            action="/register"
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
          >
            <div>
              {/* <input type="text" name="username" id="username" placeholder="username"  /> */}
              <input type="email" name="email" id="email" placeholder="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                value={password}
                onChange={e => setPassword(e.target.value)}

              />
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="confirm Password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
              <input
                type="text"
                name="referrer"
                id="referrer"
                placeholder="referral code?"
                value={referrer}
                onChange={e => setReferrer(e.target.value)}
              />
            </div>

            <button type="submit" className={Classes.button}>
              {show ? (
                <div>
                  <Loader></Loader>
                </div>
              ) : (
                "Register"
              )}
            </button>
           
          </form>
          <div className={Classes.formExtended}>
            <a href="/" className={Classes.styledLink}>
              {" "}
            </a>
            <div>
              Already Have An Account?
              <span>
                <a className={Classes.styledLink} href="/login">
                  Login
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </LayoutLogin>
  );
};

export default Register;
