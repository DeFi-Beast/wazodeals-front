import React from "react";
import UserLayout from "../../Components/Layouts/UserLayout";
import { Grid, Typography } from "@mui/material";
import Pagination from "../../Components/Pagination/Pagination";
import { Paper } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import StyledCoupon from "../../Components/StyledCoupon";
import Loader from "../../Components/Loader/ProductLoader";
import "./styles.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Deals = () => {
  const query = useQuery();
  const { discounts } = useSelector((state) => state.discounts);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const page = query.get("page") || 1;

  console.log(isLoading);
  if (!discounts) {
    console.log("true");
  } else {
    console.log("false discount");
  }

  const searchQuery = query.get("searchQuery");

  return (
    <UserLayout>
      <Grid container className="Deals">
        <Grid className="sideDrawer" item sm={3} backgroundColor="white">
          Side Bar
        </Grid>

        <Grid
          className="dealsContainer"
          justifyContent="flex-end"
          container
          sm={12}
          backgroundColor="#80808040"
        >
          <Grid item sm={3} className="sidebar-hide" backgroundColor="white">
            Side Bar deals container
          </Grid>
          <Grid
            className="RowPadding"
            px={5}
            container
            Direction="column"
            alignItems="flex-end"
            justifyContent="flex-end"
            sm={9}
            backgroundColor="#80808040"
          >
            <Grid container xs={12}>
              <Typography mb={5}>All Discount Deals</Typography>
            </Grid>

            {!isLoading ? (
              <Grid
                container
                className="productContainer"
                justifyContent="space-between"
              >
                {discounts?.discounts?.map((discount) => (
                  <StyledCoupon discount={discount} />
                ))}
              </Grid>
            ) : (
              <Grid
                position="relative"
                className="productContainer"
                container
                item
                justifyContent="center"
                alignItems="center"
              >
                <Loader />
              </Grid>
            )}

            <Grid item md={4}>
              <Paper elevation={6} className="pagination">
                <Pagination page={page} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </UserLayout>
  );
};

export default Deals;
