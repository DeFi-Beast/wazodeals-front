import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { getAllDiscounts } from "../../actions";
import { Link } from "react-router-dom";


const Paginate = ({ page }) => {
  const dispatch = useDispatch();
  const  numberOfPages  = useSelector((state) => state?.discounts?.discounts?.numberOfPages);
  console.log(page);

  console.log(numberOfPages)
  useEffect(() => {
    if (page) {
      dispatch(getAllDiscounts(page));
    }
  }, [dispatch, page]);

  const classes = useStyles();
  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/deals/discounts?page=${item.page}`}
          {...item}
        />
      )}
    />
  );
};

export default Paginate;
