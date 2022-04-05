import { Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./styles.css";
import Logo from "../Logo"

const Footer = () => {
  return (
    <Grid container padding={5} className="footer">
      <Grid
        container
        align="center"
        alignItems="center"
        justify="center"
        spacing={2}
        pb={10}
        pt={5}
      >
        <Grid xs={12} sm={4}>
          <Logo/>
        </Grid>
        <Grid align="center" xs={12} sm={8}>
          <Grid alignItems="center" container className="Container">
            <Grid
              alignItems="center"
              container
              direction="column"
              xs={12}
              sm={6}
            >
              <Grid item xs={3} sm={2}>
                <Link to="/about-us">About Us</Link>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Link to="/about-us#contact">Contact Us</Link>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Link to="#">Blog</Link>
              </Grid>
            </Grid>
            <Grid
              alignItems="center"
              container
              direction="column"
              xs={12}
              sm={6}
            >
              <Grid item xs={3} sm={2}>
                <Link to="/faq">FAQs</Link>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Link to="/terms-and-condition">Terms and Conditions</Link>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr style={{width:"100%", backgroundColor:"white", height:"1px"}}/>
      <Grid
        container
        pt={5}
        align="center"
        alignItems="center"
        justify="center"
        spacing={2}
      >
        <Grid  xs={12} sm={4}>
          <Grid align="center" justifyContent="center" container >
            <Grid item xs={1} sm={1}>
              <Link to="#">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              
            </Grid>
            <Grid item xs={1} sm={1}>
              <Link to="#">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </Grid>

            
          </Grid>
        </Grid>
        <Grid xs={12} sm={8} fontSize={12} className="Copyright">
          &copy; 2022 WazoDeals, All Rights Reserved.
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
