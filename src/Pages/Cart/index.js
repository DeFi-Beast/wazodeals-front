import React from "react";
import UserLayout from "../../Components/Layouts/UserLayout";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import "./styles.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.addToCart.cart);

  return (
    <UserLayout>
      <Grid container className="Row RowPadding">
        <h1>Cart Summary</h1>
        <Grid
          container
          className="cartContainer"
          style={{ minHeight: "60vh" }}
          alignItems='flex-start'
          
        >
          {!cart.length > 0 ? (
            <Grid container sm={12} >
                <table>
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th style={{colSpan:'5'}} >Item </th>
                            <th>Qty</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                </table>
            </Grid>
          ) : (
            <div style={{width:"100%"}}>
                
              <Grid mt={5}>Cart Empty!! <br></br>
              
              <p >Add An Item</p>
              </Grid>
              <Grid
                container
                className="cartContainer"
                justifyContent="center"
                alignItems="center"
                direction='column'
                height='100%'
              >
               
               
                <Link to="/deals/discounts">Browse hot deals</Link>

                
              </Grid>
            </div>
          )}
        </Grid>
      </Grid>
    </UserLayout>
  );
};

export default Cart;
