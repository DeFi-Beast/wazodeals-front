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
import useStyles from "../../Components/LoginFiles/styles";
import Input from "../../Components/LoginFiles/Input";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { userreset} from "../../actions/auth";
import UserLayout from "../../Components/Layouts/UserLayout";

import "./styles.css";

import { useSelector } from "react-redux";
import Loader from "../../Components/Loader";

const initialState = {
  email: "",
  token: "",
  newPassword: "",
  confirmPassword:""
};


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

  


const Reset = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const [showPassword, setShowPassword] = useState(false);

  const query = useQuery();
  
  useEffect(() => {
    setFormData({...formData, email:query.get("email") || null})
    
  }, [])
  
  console.log (query.get("email") || null)
  



  console.log(isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(userreset(formData, navigate));
    
  };
console.log(formData)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
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
            ></Grid>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">Reset Password</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
              <Input
                  name="email"
                  label="Email"
                  type="email"
                  value={formData.email}
                  required={true}
                />
                <Input
                  name="token"
                  label="Enter the Code sent to your email"
                  handleChange={handleChange}
                  type="text"
                  required={true}
                />
                 <Input
                  name="newPassword"
                  label="New Password"
                  handleChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  handleShowPassword={handleShowPassword}
                  required={true}
                />
                
                  <Input
                    name="confirmPassword"
                    label="Repeat Password"
                    handleChange={handleChange}
                    type="password"
                    required
                  />
                
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {isLoading ? <Loader /> : "Reset Your Password"}
              </Button>
            </form>
          </Paper>
        </Container>
      </div>
    </UserLayout>
  );
};

export default Reset;
