import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LayoutDefault from "../../Components/Layouts/LayoutDefault";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";

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
import useStyles from "../../Components/LoginFiles/styles";
import Input from "../../Components/LoginFiles/Input";
import Icon from "../../Components/LoginFiles/icon";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { merchantsignup, merchantsignin } from "../../actions/auth";
import FileBase from "react-file-base64";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const initialState = {
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
  email: "",
 
};

const Merchant = () => {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();
 const location = useLocation()
  // const login = query.get("login")
  const [isSignup, setIsSignup] = useState();

  useEffect(() => {
    setIsSignup(!(JSON.parse(query.get("login"))))
  }, [])

  // console.log(login)
  console.log(isSignup)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(merchantsignup(formData, navigate));
    } else {
      dispatch(merchantsignin(formData, navigate));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
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
        merchant Dashboard
        <Container component="main" maxWidth="sm">
          <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">
              {isSignup ? "Merchant Sign Up" : "Merchant Sign In"}
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {isSignup && (
                  <>
                    <Input
                      name="merchantName"
                      label="Merchant Name"
                      handleChange={handleChange}
                      autoFocus
                      half
                      quarter
                    />
                  </>
                )}
                <Input
                  name="email"
                  label="Email"
                  handleChange={handleChange}
                  type="email"
                  twothird={isSignup ? "twothird" : ""}
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
                      name="address"
                      label="Address"
                      handleChange={handleChange}
                      twothird
                    />
                    <Input
                      name="description"
                      placeholder="description"
                      label="Description"
                      multiline
                      handleChange={handleChange}
                    />
                    <Grid item xs={12}>
                      <div className={classes.fileInput}>
                        <FileBase
                          type="file"
                          multiple={false}
                          
                          onDone={({ base64 }) => {
                            setFormData({ ...formData, selectedFile: base64 });
                          }}
                        />
                      </div>
                    </Grid>
                   
                  </>
                )}

                <Input
                  name="password"
                  label="Password"
                  handleChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  handleShowPassword={handleShowPassword}
                />
                {isSignup && (
                  <Input
                    name="confirmPassword"
                    label="Repeat Password"
                    handleChange={handleChange}
                    type="password"
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
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Button onClick={switchMode}>
                    <Link to={`/merchant/${isSignup ? "login" : "become-a-merchant"}`}>
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

export default Merchant;
