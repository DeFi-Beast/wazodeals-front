import React, { useEffect, useState } from "react";
import UserLayout from "../../Components/Layouts/UserLayout";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import BreadCrumbs from "../../Components/BreadCrumbs";

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const cartTotal = localStorage.getItem("cartTotal");
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [qty, setQty] = useState(null);
  const [refCart, setRefCart] = useState(null);
  const [index, setIndex] = useState(null);

  const handleRemoveItem = (item) => {
    console.log(item);
    dispatch({ type: "REMOVE_CART_ITEM", payload: item });
    navigate("/cart");
  };

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  console.log(screenSize);
  const handleQty = (e, id, index) => {
    let refCart = null
    if (e.target.value <= 0) {
      return refCart.qty = 1;
    }
    setIndex(index);
    refCart = cart?.find((cart) => cart._id === id);
    setRefCart(refCart);
 
    refCart.qty = e.target.value;
    console.log(refCart);

    const { value } = e.target;
    console.log(value, id);
    dispatch({ type: "CART_QTY", payload: { value: value, id: id } });
  };
  
  const handleQtyPlus = (id, index) => {
    
    setIndex(index);
    let refCart = cart?.find((cart) => cart._id === id);
    setRefCart(refCart);
 
    refCart.qty = Number(refCart.qty) + 1;
    

   
    dispatch({ type: "CART_QTY_PLUS", payload: { id: id } });
  };
  const handleQtyMinus = (id, index) => {
    if (qty <= 1) {
      return;
    }
    setIndex(index);
    const refCart = cart?.find((cart) => cart._id === id);
    setRefCart(refCart);
 
    refCart.qty -=1 ;
    console.log(refCart.qty)
    console.log(refCart);

  
    dispatch({ type: "CART_QTY_MINUS", payload: { id: id } });
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
              <Grid sm={12}>
                <Grid>
                  <Grid container sm={12} color="white">
                    {screenSize.dynamicWidth < 600 ? (
                      ""
                    ) : (
                      <Grid
                        bgcolor="#80808087"
                        py={2}
                        md={0.5}
                        sm={1}
                        textAlign="center"
                      ></Grid>
                    )}
                    <Grid
                      ml={1}
                      py={2}
                      bgcolor="#80808087"
                      md={1}
                      sm={1}
                      xs={2}
                      textAlign="center"
                    >
                      S/N
                    </Grid>
                    <Grid
                      ml={1}
                      py={2}
                      bgcolor="#80808087"
                      md={6.5}
                      sm={9}
                      xs={9.2}
                      textAlign="center"
                    >
                      Item{" "}
                    </Grid>
                    {screenSize.dynamicWidth < 900 ? (
                      ""
                    ) : (
                      <Grid
                        ml={1}
                        py={2}
                        bgcolor="#80808087"
                        md={1.5}
                        textAlign="center"
                      >
                        Qty
                      </Grid>
                    )}
                    {screenSize.dynamicWidth < 900 ? (
                      ""
                    ) : (
                      <Grid
                        ml={1}
                        py={2}
                        bgcolor="#80808087"
                        md={2}
                        textAlign="center"
                      >
                        Price( &#8358;)
                      </Grid>
                    )}
                  </Grid>
                </Grid>
                <Grid container>
                  {cart?.map((item, index) => (
                    <Grid
                      container
                      sm={12}
                      py={3}
                      className={`cart-row ${
                        index % 2 === 0 ? "" : "cart-row-colored"
                      }`}
                      key={index}
                      sx={{ padding: "10px 10px 10px 0px" }}
                    >
                      <Grid
                        ml={1}
                        container
                        justifyContent="center"
                        textAlign="center"
                        className="cart-row-remove-btn"
                        md={0.5}
                        sm={1}
                        xs={12}
                        sx={{ justifyContent: "right" }}
                        onClick={() => handleRemoveItem(item?._id)}
                      ></Grid>
                      <Grid ml={1} textAlign="center" md={1} sm={1} xs={2}>
                        {index + 1}
                      </Grid>
                      <Grid
                        ml={1}
                        md={6.5}
                        sm={8}
                        xs={9}
                        className="description"
                      >
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
                      </Grid>
                      <Grid
                        container
                        flexDirection="column"
                        alignItems={"center"}
                        ml={1}
                        xs={8}
                        textAlign="center"
                        md={1.5}
                        className="cart-resp"
                      >
                        <Grid>
                          {screenSize.dynamicWidth < 900 ? (
                            <Grid p={1} bgcolor="#80808087" color="white">
                              Qty
                            </Grid>
                          ) : (
                            ""
                          )}
                          <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                          >
                            <span className="cart-qty-btn cart-qty-decrease" onClick={() => handleQtyMinus(item._id, index)}>
                              {" "}
                              -{" "}
                            </span>
                            <input
                              min="1"
                              max="1000"
                              type="number"
                              className="cart-qty"
                              onChange={(e) => handleQty(e, item._id, index)}
                              value={
                                cart?.findIndex(
                                  (cart) => cart._id === refCart?._id
                                ) === index
                                  ? refCart.qty
                                  : item.qty
                              }
                            />
                            <span className="cart-qty-btn cart-qty-decrease" onClick={() => handleQtyPlus(item._id, index)}>
                              {" "}
                              +{" "}
                            </span>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        flexDirection="column"
              
                        alignItems={"center"}
                        xs={3}
                        textAlign="center"
                        md={2}
                        className="cart-resp"
                      >
                        <Grid>
                          {screenSize.dynamicWidth < 900 ? (
                            <Grid p={1} bgcolor="#80808087" color="white">
                              Price
                            </Grid>
                          ) : (
                            ""
                          )}
                          {Number(
                            item.price - (item.price * item.discount) / 100
                          ).toLocaleString("en-US")}
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
                <Grid>
                  <Grid>
                    <hr></hr>
                  </Grid>
                </Grid>
                <Grid container py={3}>
                  <Grid sm={3} xs={1}></Grid>
                  <Grid sm={7} xs={6}>
                    SubTotal
                  </Grid>

                  <Grid
                    sm={2}
                    justifyContent="flex-end"
                    textAlign="center"
                    className="cart-total"
                    xs={5}
                  >
                    &#8358; {Number(cartTotal).toLocaleString("en-US")}
                  </Grid>
                </Grid>
              </Grid>
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
