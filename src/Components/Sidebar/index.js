import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { Grid, Button } from "@material-ui/core";
import { useState } from "react";

import BreadCrumbs from "../BreadCrumbs";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./styles.css";
import { categories } from "../../constants";
import { discounts } from "../../constants";




const Sidebar = ({ handleInputChange, handleSearch }) => {
 
  const { merchants } = useSelector((state) => state.merchants);
  const [page, setPage] = useState(1);
  
  const LIMIT = 6;
  const startIndex = (Number(page) - 1) * LIMIT;
  let total = merchants?.merchant?.length;
  let totalPage = Math.ceil(total / LIMIT);
  console.log(startIndex, page * LIMIT);
  const merchantinView = merchants?.merchant?.slice(startIndex, page * LIMIT);

  const handleNav = () => {
    console.log(totalPage);
    if (page >= totalPage) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  };

 
  return (
    <form className="sideDrawerContainer" onSubmit={handleSearch}>
      <Grid item sm={3} className="sideDrawerContainer">
        <BreadCrumbs />
        <br />

        <h3 color="#FF0076">Filters</h3>
        <hr></hr>

        <Grid className="sideDrawer" item sm={3} p={3} backgroundColor="white">
          <Grid mt={5} xs={12}>
            <br></br>
            <Grid className="filterContainer">
              <Grid>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    By Categories
                  </FormLabel>
                  <hr></hr>

                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    onChange={handleInputChange}
                    name="category"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      padding: "10px",
                    }}
                  >
                    {categories.map((item) => (
                      <Grid xs={5} pt={3} style={{ padding: "5px" }}>
                        <FormControlLabel
                          value={`${item}`}
                          control={<Radio />}
                          name="category"
                          label={`${item}`}
                          className="sidebarInput"
                        />
                      </Grid>
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>
              <br></br>
              <Grid>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    By Merchants
                  </FormLabel>
                  <hr></hr>

                  <Grid container justifyContent="space-between">
                    <Grid>
                      <span>
                        (showing {merchantinView?.length} of {total} merchants){" "}
                      </span>
                    </Grid>
                    <Grid>
                      <span className="sidebarCntrl" onClick={handleNav}>
                        Next
                      </span>
                    </Grid>
                  </Grid>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="merchant"
                    onChange={handleInputChange}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      padding: "10px",
                    }}
                  >
                    {merchantinView?.map((merchant) => (
                      <Grid xs={12} style={{ padding: "5px" }}>
                        <FormControlLabel
                          value={`${merchant._id}` || `${merchant}`}
                          name="merchant"
                          control={<Radio />}
                          label={`${
                            merchant.merchant || merchant.merchantName
                          }`}
                          className="sidebarInput"
                        />
                      </Grid>
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>
              <br></br>
              <Grid>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    By Discount (%)
                  </FormLabel>
                  <hr></hr>

                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    onChange={handleInputChange}
                    name="discount"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      padding: "10px",
                    }}
                  >
                    {discounts.map((discount) => (
                      <Grid item sm={6} style={{ padding: "5px" }}>
                        <FormControlLabel
                          value={discount || { discount }}
                          control={<Radio />}
                          name="discount"
                          label={discount}
                          className="sidebarInput"
                        />
                      </Grid>
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </Grid>
          </Grid>
        </Grid>
        <Grid className="searchBtn" sm={3} container justifyContent="flex-end">
          {/* <Link to="#">Search</Link> */}
          <Button variant="contained" style={{backgroundColor:"#FF0076", color:"white"}} type="submit">
                      Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Sidebar;
