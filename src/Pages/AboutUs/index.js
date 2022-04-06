import React from "react";
import UserLayout from "../../Components/Layouts/UserLayout";
import { Grid } from "@mui/material";
import "./styles.css"

const About = () => {
  return (
    <UserLayout>
      <div className="Row RowPadding About">
        <h1>About Us</h1>
        <Grid container  className="About-Container" >
          <Grid  sm={6} xs={12}>
          <p >
          We are the #1 and the leading student loyalty platforms,
          <br></br>
          we connect brands with the new generation of consumers
          <br></br>
        </p>
          </Grid>
          <Grid  sm={6} xs={12} pt={4}>
              <p className="contact">
          <span style={{fontWeight:"bold"}}>CONTACT US</span> <br></br>
          09049793930 <br></br> support@wazodeals.com

              </p>
          </Grid>
        </Grid>
       
      </div>
    </UserLayout>
  );
};

export default About;
