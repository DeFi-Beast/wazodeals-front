import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useLocation, useParams } from "react-router-dom";

const BasicBreadcrumbs = () => {
  const Location = useLocation();

  const { id } = useParams();
  console.log(Location.pathname);
  return (
    <div role="presentation">
      {Location.pathname === `/discounts/${id}` ? (
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/deals/discounts">
            Deals
          </Link>
          <Link underline="hover" color="inherit" href="/deals/discounts">
            Discounts
          </Link>
          <Typography color="text.primary">
            {localStorage.getItem("merchant")}
          </Typography>
        </Breadcrumbs>
      ) : (
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          {Location.pathname === "/cart" ? (
            <Typography color="text.primary">Cart Summary</Typography>
          ) : (
            <Link underline="hover" color="inherit" href="/deals/discounts">
              Deals
            </Link>
          )}

          {Location.pathname === "/cart" ? (
            ""
          ) : (
            <Typography color="text.primary">All Discounts</Typography>
          )}
        </Breadcrumbs>
      )}
    </div>
  );
};
export default BasicBreadcrumbs;
