import { useState, useEffect } from "react";
import LayoutDefault from "../../Components/Layouts/LayoutDefault";
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
import { useNavigate } from "react-router-dom";
import { usersignup, usersignin } from "../../actions/auth";
import FileBase from "react-file-base64";

const initialState = {
  name:"",
  phone:"",
  password: "",
  confirmPassword: "",
  email: "",
  referrer:""
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
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

  console.log(formData)
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

  return (
    <LayoutDefault>
      <div className="Row">
        Login Dashboard
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
              <Grid item xs={6} >
                <Link to={`/user/${isSignup ? "signup" : "login"}`}>
                  {isSignup ? "User Sign Up" : "User Login"}
                </Link>
              </Grid>
              <Grid xs={6} >
                <Link
                  to={`/merchant/${isSignup ? "become-a-merchant" : "login"}?${isSignup ? `login=${!isSignup}` : `login=${!isSignup}`}`}
                >
                  {isSignup ? "Become A Merchant" : "Merchant Login"}
                </Link>
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
                    
                  />
                )}

              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {isSignup ? "Sign Up" : "Sign In"}
              </Button>
              <GoogleLogin
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
          />
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Button onClick={switchMode}>
                    <Link to={`/user/${isSignup ? "login" : "signup"}`}>
                      {isSignup
                        ? "Already have an account? SIgn In"
                        : "Don't have an account? Sign Up"}
                    </Link>
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </div>
    </LayoutDefault>
  );
};

export default Login;
