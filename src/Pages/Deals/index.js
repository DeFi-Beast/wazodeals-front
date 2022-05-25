import React, { useState, useEffect } from "react";
import UserLayout from "../../Components/Layouts/UserLayout";
import { Grid } from "@mui/material";
import Pagination from "../../Components/Pagination/Pagination";
import { Paper } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import StyledCoupon from "../../Components/StyledCoupon";
import Loader from "../../Components/Loader/ProductLoader";
import Sidebar from "../../Components/Sidebar";
import { getDiscountsBySearch } from "../../actions/index";
import "./styles.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const defaultValues = {
  category: null,
  discount: null,
  merchant: "",
};
const Deals = () => {
  const query = useQuery();
  const { discounts } = useSelector((state) => state?.discounts);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const page = query.get("page") || 1;
  let [formValues, setFormValues] = useState(defaultValues);
  const pathMerchant = query.get("merchant" || null);
  const discount = query.get("discount" || null);
  const category = query.get("category" || null);
  const Location = useLocation();
  const { merchants } = useSelector((state) => state.merchants);
  const selectedMerchant = merchants?.merchant?.find(
    (merchant) => merchant?._id === pathMerchant
  );


  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const handleSearch = (e) => {
    e.preventDefault();
    if (formValues.merchant || formValues.category || formValues.discount) {
      console.log(formValues);
      dispatch(getDiscountsBySearch(formValues));
      navigate(
        `/deals/discounts/search?merchant=${
          formValues.merchant || ""
        }&category=${formValues.category || ""}&discount=${
          formValues.discount || ""
        }`
      );
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    if (Location.pathname === "/deals/discounts/search") {
      if (formValues.merchant || formValues.category || formValues.discount) {
        console.log(formValues);
        dispatch(getDiscountsBySearch(formValues));
        navigate(
          `/deals/discounts/search?merchant=${
            formValues.merchant || ""
          }&category=${formValues.category || ""}&discount=${
            formValues.discount || ""
          }`
        );
      } else {
        navigate("/deals/discounts");
      }
    }
  }, []);

  let handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    console.log(e.target);
  };

  return (
    <UserLayout>
      <Grid container className="Deals dealscontainerpadding">
        <Grid
          className="dealsContainer"
          justifyContent="flex-end"
          container
          sm={12}
          backgroundColor="#80808040"
        >
          <Grid item sm={3} className="sidebar-hide" backgroundColor="white">
            <Sidebar
              handleInputChange={handleInputChange}
              handleSearch={handleSearch}
            />
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
              {Location.pathname === "/deals/discounts/search" ? (
                <Grid container direction="row">
                  <Grid>
                    <h1 mb={5}>
                      {discounts?.discounts?.length} results found for{" "}
                    </h1>
                  </Grid>

                  <h1 style={{ display: "inline" }}>
                    (
                    {pathMerchant ? (
                      <>Merchant= {selectedMerchant?.merchant} </>
                    ) : (
                      ""
                    )}
                    {discount && <>Discount= {discount},</>}
                    {category && <>Category= {category}</>})
                  </h1>
                </Grid>
              ) : (
                <h1>
                  {" "}
                  Showing {discounts?.discounts?.length} of {discounts?.total}{" "}
                  results
                </h1>
              )}
            </Grid>

            {!isLoading ? (
              <Grid
                container
                className="productContainer"
                justifyContent="space-between"
                mt={3}
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
            {!pathMerchant && !category && !discount && (
              <Grid item md={4}>
                <Paper elevation={6} className="pagination">
                  <Pagination page={page} />
                </Paper>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </UserLayout>
  );
};

export default Deals;
