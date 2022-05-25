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
import { useNavigate } from "react-router-dom";
import { useractivate } from "../../actions/auth";
import UserLayout from "../../Components/Layouts/UserLayout";
import "./styles.css";

import { useSelector } from "react-redux";
import Loader from "../../Components/Loader";

const initialState = {
  code: "",
  email: "",
};

const Login = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    setFormData({ ...formData, email: user?.email });
  }, []);

 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(useractivate(formData, navigate));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            <Typography variant="h5">Complete Your Registration</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Input
                  name="email"
                  label="Email"
                  type="email"
                  value={user?.email}
                  required={true}
                />
                <Input
                  name="code"
                  label="Code"
                  handleChange={handleChange}
                  type="text"
                  required={true}
                />
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {isLoading ? <Loader /> : "Verify Your Email"}
              </Button>
            </form>
          </Paper>
        </Container>
      </div>
    </UserLayout>
  );
};

export default Login;
