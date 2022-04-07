import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
  TextareaAutosize,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { GoogleLogin } from "react-google-login";
import useStyles from "../../Components/LoginFiles/styles";
import Input from "../../Components/LoginFiles/Input";
import Icon from "../../Components/LoginFiles/icon";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation,useParams } from "react-router-dom";
import { usersignup, usersignin } from "../../actions/auth";
import UserLayout from "../../Components/Layouts/UserLayout";
import FileBase from "react-file-base64";
import "./styles.css";
// import Notify from "../../Components/Notify";
import { useSelector } from "react-redux";
import Loader from "../../Components/Loader";

const initialState = {
  name: "",
  phone: "",
  password: "",
  confirmPassword: "",
  email: "",
  referrer: "",
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const isLoading = useSelector(state => state.auth.isLoading);
  const location = useLocation()
  

  const query = useQuery();

  // const referrer = query.get("user");

  useEffect(() => {
    setFormData({ ...formData, referrer: query.get("user") });
  
  }, [])
  

  console.log(location.pathname)

  useEffect(() => {
    if(location.pathname === "/signup") {
      setIsSignup(true)
    }
    else
    setIsSignup(false)
    
  }, [location])
  

  console.log(isLoading)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(usersignup(formData, navigate));
    } else {
      dispatch(usersignin(formData, navigate));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCheck= (e) => {
    setIsChecked(!isChecked);
  };

  console.log(formData);
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const googleSuccess = async (res) => {
    console.log(res);
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });

      navigate("/");
    } catch (error) {}
  };
  const googleFailure = (error) => {
    console.log(error);
    console.log("google sign in was unsuccesful. Try Again later");
  };

  const handleSignup = () => {
    setIsSignup(true);
  };
  const handleLogin = () => {
    setIsSignup(false);
  };

  return (
    <UserLayout>
      <div className="Row RowPadding Login">
        <Container component="main" maxWidth="sm">
          <Paper className={classes.paper} elevation={3}>
            <Grid
              className={classes.menu}
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <Grid item xs={6} className={!isSignup ? "colorBg" : ""}>
                <Button onClick={handleLogin}>
                  <Link to={"/login"}>User Login</Link>
                </Button>
              </Grid>
              <Grid xs={6} className={isSignup ? "colorBg" : ""}>
                <Button onClick={handleSignup}>
                  <Link to={"/signup"}>User Sign up</Link>
                </Button>
              </Grid>
            </Grid>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">
              {isSignup ? "User Sign Up" : "User Sign In"}
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Input
                  name="email"
                  label="Email"
                  handleChange={handleChange}
                  type="email"
                  required={true}
                />
                {isSignup && (
                  <>
                    {" "}
                    <Input
                      name="phone"
                      label="Mobile Phone"
                      handleChange={handleChange}
                      type="tel"
                      half
                      quarter
                    />
                    <Input
                      name="name"
                      label="Name"
                      handleChange={handleChange}
                      twothird
                    />
                  </>
                )}

                <Input
                  name="password"
                  label="Password"
                  handleChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  handleShowPassword={handleShowPassword}
                  required={true}
                />
                {isSignup && (
                  <Input
                    name="confirmPassword"
                    label="Repeat Password"
                    handleChange={handleChange}
                    type="password"
                    required
                  />
                )}
                {isSignup && (
                  <Input
                    name="referrer"
                    label="Referrer Code"
                    handleChange={handleChange}
                    type="text"
                    value={formData.referrer}
                  />
                )}
                {/* {isSignup && (
                  <div className="agreement-Box">
                    <input
                      name=""
                      label="Referrer Code"
                      handleCheck={handleCheck}
                      type="checkbox"
                    />
                    <span>
                      Do you agree to our{" "}
                      <Link to="/terms-and-condition">Terms and condition</Link>
                    </span>{" "}
                  </div>
                )} */}
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {isSignup ?( isLoading ? <Loader/> : "Sign Up" ):( isLoading ? <Loader/> : "Sign In")}
              </Button>
              {/* <GoogleLogin
            clientId="57511145551-jofdo3npaipgfj4u8nkeh496jf526gbf.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          /> */}
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Button onClick={switchMode} >
                    <Link to={`/${isSignup ? "login" : "signup"}`}>
                      {isSignup
                        ? "Already have an account? SIgn In"
                        : "Don't have an account? Sign Up"}
                    </Link>
                  </Button>
                </Grid>
                {!isSignup  && <Grid item>
                  <Button onClick={switchMode} >
                    <Link to="/forgot-password">
                     
                        Forgot Password
                    </Link>
                  </Button>
                </Grid>}
              </Grid>
            </form>
          </Paper>
        

        </Container>
      </div>
    </UserLayout>
  );
};

export default Login;
