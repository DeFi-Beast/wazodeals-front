import { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "../../Components/LoginFiles/styles";
import Input from "../../Components/LoginFiles/Input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userforgot } from "../../actions/auth";
import UserLayout from "../../Components/Layouts/UserLayout";
import "./styles.css";

import { useSelector } from "react-redux";
import Loader from "../../Components/Loader";

const initialState = {
  email: "",
};

const Email = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const isLoading = useSelector((state) => state.auth.isLoading);

  console.log(isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userforgot(formData, navigate));
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
            <Typography variant="h5">Forgot Password</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Input
                  name="email"
                  label="Your Email"
                  handleChange={handleChange}
                  type="email"
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
                {isLoading ? <Loader /> : "Reset Password"}
              </Button>
            </form>
          </Paper>
        </Container>
      </div>
    </UserLayout>
  );
};

export default Email;
