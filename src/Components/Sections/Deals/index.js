import StyledCoupon from "../../StyledCoupon";

import Classes from "../../../Styles/Deals.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";


const Deals = () => {
  const { discounts } = useSelector((state) => state.discounts);
  const { merchants } = useSelector((state) => state.merchants);
  // const merchant = discounts?.discount?.map(discount => merchants?.merchant?.find(merchant => merchant?._id === discount?.merchant))
  //  console.log(merchants)

  return (
    <div>
      <Grid container className="Row" >
        <Grid item xs={12} sm={6}>
        <h2 className="title" >Discount Deals</h2>

        </Grid>
        <Grid className="product-btn-color" item xs={12}  sm={6}  style={{justifyContent:"flex-end", display:"flex", alignItems:"flex-end"}} >
          <Link to="/deals/discounts">
            All Deals <FontAwesomeIcon icon={faArrowAltCircleRight } />
          </Link>
        </Grid>
      </Grid>

      <Grid container justifyContent="space-around" className="Row RowPadding" d-flex md={12}>
        {discounts?.discounts?.slice(0, 6).map((discount, index) => (
          <StyledCoupon key={discount?._id} discount={discount} type="deals" />
        ))}
      </Grid>
    </div>
  );
};

export default Deals;
