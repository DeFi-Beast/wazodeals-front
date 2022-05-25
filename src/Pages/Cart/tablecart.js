import React from "react";
import UserLayout from "../../Components/Layouts/UserLayout";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import BreadCrumbs from "../../Components/BreadCrumbs";

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const cartTotal = JSON.parse(localStorage.getItem("cartTotal"));
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveItem = (item) => {
    console.log(item);
    dispatch({ type: "REMOVE_CART_ITEM", payload: item });
    navigate("/cart");
  };

  return (
    <UserLayout>
      <Grid container className="Row RowPadding containerpadding">
        <Grid container mb={3}>
          <BreadCrumbs />
        </Grid>
        <Grid container justifyContent="space-between" mb={3}>
          <h1>Cart Summary</h1>

          <Grid
            item
            sm={6}
            justifyContent="flex-end"
            style={{ textAlign: "right" }}
          >
            <Link to="/deals/discounts">Continue Shopping</Link>
          </Grid>
        </Grid>
        <Grid
          container
          className="cartContainer"
          style={{ minHeight: "60vh" }}
          alignItems="flex-start"
        >
          {cart?.length > 0 ? (
            <Grid container sm={12} mt={3} className="scrollContainer">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>S/N</th>
                    <th>Item </th>
                    <th>Qty</th>
                    <th>Price( &#8358;)</th>
                  </tr>
                </thead>
                <tbody>
                  {cart?.map((item, index) => (
                    <tr className="cart-row" key={index}>
                      <td onClick={() => handleRemoveItem(item?._id)}></td>
                      <td>{index + 1}</td>
                      <td colSpan={0} className="description">
                        {item.description} &nbsp;
                        <span
                          style={{
                            background: "red",
                            color: "white",
                            padding: "5px",
                          }}
                        >
                          You saved &#8358;
                          {Number(
                            (item.qty * item.discount * item.price) / 100
                          ).toLocaleString("en-US")}{" "}
                          on this item{" "}
                        </span>
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        {Number(
                          item.price - (item.price * item.discount) / 100
                        ).toLocaleString("en-US")}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tr colSpan={4}>
                  <td colSpan={5}>
                    <hr></hr>
                  </td>
                </tr>
                <tr>
                  <td colSpan={3}></td>
                  <td>SubTotal</td>

                  <td className="cart-total">
                    &#8358; {Number(cartTotal).toLocaleString("en-US")}
                  </td>
                </tr>
              </table>
            </Grid>
          ) : (
            <div style={{ width: "100%" }}>
              <Grid mt={5}>
                Cart Empty!! <br></br>
                <p>Add An Item</p>
              </Grid>
              <Grid
                container
                className={cart?.length === 0 ? "" : "cartContainer"}
                justifyContent="center"
                alignItems="center"
                direction="column"
                height="100%"
              >
                <Link to="/deals/discounts">Browse hot deals</Link>
              </Grid>
            </div>
          )}
        </Grid>
        {cart?.length > 0 && (
          <Grid container mt={5} justifyContent="right">
            <Link className="cart-checkout" to={user ? "/checkout" : "/login"}>
              Proceed To Checkout
            </Link>
          </Grid>
        )}
      </Grid>
    </UserLayout>
  );
};

export default Cart;
