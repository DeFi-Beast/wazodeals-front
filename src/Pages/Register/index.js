import { useState } from "react";
import LayoutLogin from "../../Components/Layouts/LayoutLogin";
import { StyledDiv, StyledLogo } from "../../Components/Logo/Logo";
import Classes from "../../Styles/Login.module.css";
import Logbg from "../../Assets/Logbg.png";
import LoginLogo from "../../Assets/Loginlogo.png";
import Loader from "../../Components/Loader";
import { Link, useLocation } from "react-router-dom";

const Register = ({ dispatch }) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referrer, setReferrer] = useState("");
  const [username, setUsername] = useState(
    new URLSearchParams(useLocation().search).get("user")
  );

  const handleSubmit = (e) => {
    setShow(true);
    e.preventDefault();
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
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="string"
                name="name"
                id="name"
                placeholder="name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <input
                type="text"
                name="referrer"
                id="referrer"
                placeholder="referral code? (optional)"
                value={referrer || username}
                onChange={(e) => setReferrer(e.target.value)}
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
