import React, { useEffect, useState } from "react";
import UserLayout from "../../Components/Layouts/UserLayout";
import { Grid } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import BreadCrumbs from "../../Components/BreadCrumbs";
import { payment } from "../../actions/payment";
import { PaystackButton } from "react-paystack";
import axios from "axios";
import { toast } from "react-toastify";
import { postOrder, createPDF } from "../../actions/order";
import { createReceipt, getReceiptById } from "../../actions/receipts";

const initialOrderState = {
  order: [],
  amount_paid_in_card: null,
  amount_paid_in_point: 0,
  id: JSON.parse(localStorage.getItem("profile"))?.user?._id,
  email: JSON.parse(localStorage.getItem("profile"))?.user?.email,
  pay_stack_ref: "",
  pay_stack_ref_id: "",
  orderTotal: null,
  payment_method: null,
  new_user_point_balance: null,
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const user = JSON.parse(localStorage.getItem("profile"));
  let orderItem = JSON.parse(localStorage.getItem("order"));

  const user_point_balance = JSON.parse(localStorage.getItem("profile"))?.user
    ?.totalPoint;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [refCart, setRefCart] = useState(null);
  const [point, setPoint] = useState(null);

  const [orderData, setOrderData] = useState(initialOrderState);

  const [totalPointNaira, setTotalPointNaira] = useState(0);
  const [index, setIndex] = useState(null);
  const { receipt } = useSelector((state) => state.receipts);
  // let [receiptTotal, setReceiptTotal] = useState(null);
  const [option, setOption] = useState(false);

  // useEffect(() => {
  //   dispatch(getReceiptById(user?.user?._id));
  // }, []);

  console.log(receipt);

  const config = {
    reference: new Date().getTime().toString(),
    email: user?.user?.email,
    amount: Number(orderData?.amount_paid_in_card * 100)?.toFixed(2),
    metadata: {
      amount_paid_in_card: Number(orderData?.amount_paid_in_card)?.toFixed(2),
      amount_paid_in_point: Number(orderData?.amount_paid_in_point)?.toFixed(2),
    },
  publicKey: "pk_live_82bde11c458f4742f21b07d93ee6c5567a8ce755",
  };
  // publicKey: "pk_live_82bde11c458f4742f21b07d93ee6c5567a8ce755",
  // publicKey: "pk_test_350f98a7c9674e816f407d23956b66f2b8b7f8e7",


  // useEffect(() => {
  //   console.log("=====total====");
  //   console.log(total);
  //   if(option){
  //     setOrderData({
  //       ...orderData,
  //       orderTotal: total,
  //     });
  //   } else {
  //     setOrderData({
  //       ...orderData,
  //       orderTotal: total,
  //       amount_paid_in_card: total?.toFixed(2),
  //     });
  //   }

  // }, [total]);

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
    let refCart = null;
    if (e.target.value <= 0) {
      return (refCart.qty = 1);
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
  const handleQtyMinus = (qty, id, index) => {
    if (qty <= 1) {
      return;
    }
    setIndex(index);
    const refCart = cart?.find((cart) => cart._id === id);
    setRefCart(refCart);

    refCart.qty = Number(refCart.qty) - 1;

    console.log(refCart.qty);
    console.log(refCart);

    dispatch({ type: "CART_QTY_MINUS", payload: { id: id } });
  };

  const handleChange = (e) => {
    console.log(e.target.checked);
    setOption(e.target.checked);
  };
  useEffect(() => {
    let total;
    total = cart?.reduce(function (previousValue, currentValue) {
      return (
        previousValue +
        currentValue.qty *
          (currentValue.price -
            (currentValue.price * currentValue.discount) / 100)
      );
    }, 0);
    setTotal(total);
    return total;
  }, [[], cart]);

  useEffect(() => {
    let orderItem = [];
    cart?.map((cart) => {
      orderItem.push({
        productId: cart._id,
        orderQty: cart.qty,
        orderPrice: cart.price * cart.qty,
        productTitle: cart._title,
        cart
      });
    });
    console.log(orderItem);
    localStorage.setItem("order", JSON.stringify([...orderItem]));
    setOrderData({ ...orderData, order: [...orderItem] });
  }, [user?.user?._id, cart?.length]);

  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    setOrderData({ ...orderData, pay_stack_ref_id: reference?.reference });
    if (reference?.reference) {
      console.log(orderData);
      dispatch(postOrder(orderData, navigate));
      navigate("/");
    }
    console.log(cart);
    // let message = 'Payment complete! Reference: ' + reference.reference;
    // dispatch( toast.success(<>{message}</>))

    // localStorage.removeItem("cart");
    // localStorage.removeItem("cartTotal");
    // navigate("/");

    console.log(reference);
  };

  console.log(JSON.stringify(orderData));

  const handleCartCheckout = () => {
    // setOrderData({ ...orderData });
    dispatch(postOrder(orderData, navigate));
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    // console.log('closed')
  };

  const componentProps = {
    ...config,
    text: "Proceed To Checkout",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  useEffect(() => {
    setTotalPointNaira(user?.user?.totalPoint * 20);
  }, [user]);

  console.log("-======option==============");
  console.log(option);

  // useEffect(() => {
  //     if(option === true){
  //       console.log("optiontru")
  //       if(total > totalPointNaira){
  //         setOrderData({ ...orderData, amount_paid_in_point: totalPointNaira, new_user_point_balance:0,orderTotal: total, amount_paid_in_card:(total - totalPointNaira), payment_method:["card", "point"] });
  //       } else {
  //         setOrderData({ ...orderData, amount_paid_in_point: total, new_user_point_balance:(user_point_balance - total/20), orderTotal: total, amount_paid_in_card:0, payment_method:["point"] });
  //       }

  //     }else {
  //       console.log("optionfalse")
  //       setOrderData({ ...orderData, amount_paid_in_point: 0, orderTotal:total, amount_paid_in_card:total, payment_method:["card"] });

  //     }
  // }, [option])
  useEffect(() => {
    setOrderData({ ...orderData, amount_paid_in_point: totalPointNaira });
  }, [option]);


  useEffect(() => {
    if (option === true) {
      console.log("optiontru");
      if (total > totalPointNaira) {
        setOrderData({
          ...orderData,
          amount_paid_in_point: totalPointNaira?.toFixed(2),
          email: user?.user?.email,
          order: [...orderItem],
          new_user_point_balance: 0,
          orderTotal: total?.toFixed(0),
          amount_paid_in_card: (total - totalPointNaira)?.toFixed(2),
          pay_stack_ref_id: null,
          payment_method: ["card", "point"],
        });
      } else {
        setOrderData({
          ...orderData,
          amount_paid_in_point: total?.toFixed(2),
          email: user?.user?.email,
          order: [...orderItem],
          new_user_point_balance: (user_point_balance - total / 20)?.toFixed(2),
          orderTotal: total?.toFixed(2),
          amount_paid_in_card: 0,
          pay_stack_ref_id: null,
          pay_stack_ref: "payment is based on point",
          payment_method: ["point"],
        });
      }
    } else {
      console.log("optionfalse");
      setOrderData({
        ...orderData,
        amount_paid_in_point: 0,
        pay_stack_ref_id: config?.reference,
        email: user?.user?.email,
        order: [...(JSON.parse(localStorage.getItem("order")))],
        pay_stack_ref: "payment is based on card",
        orderTotal: total?.toFixed(2),
        amount_paid_in_card: total?.toFixed(2),
        payment_method: ["card"],
      });
    }
  }, [option, total,cart?.length]);

  console.log(config);

  console.log(orderData);
  console.log(totalPointNaira);
  console.log(total);
  // const pdf = { name: "test", receiptId: 6467873903, price1: 10, price2: 10 };
  // const createAndDownloadPdf = () => {
  //   dispatch(createPDF(pdf));
  // };
  // <button onClick={createAndDownloadPdf}>Download PDF</button>

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
                        md={1}
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
                      md={6}
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
                        md={1}
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
                        md={1}
                        sm={1}
                        xs={12}
                        onClick={() => handleRemoveItem(item?._id)}
                      ></Grid>
                      <Grid ml={1} textAlign="center" md={1} sm={1} xs={2}>
                        {index + 1}
                      </Grid>
                      <Grid ml={1} md={6} sm={8} xs={9} className="description">
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
                        md={1}
                        className="cart-resp"
                      >
                        <Grid>
                          {screenSize.dynamicWidth < 900 ? (
                            <Grid
                              my={1}
                              p={1}
                              bgcolor="#80808087"
                              color="white"
                            >
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
                            <span
                              className="cart-qty-btn cart-qty-decrease"
                              onClick={() =>
                                handleQtyMinus(item.qty, item._id, index)
                              }
                            >
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
                            <span
                              className="cart-qty-btn cart-qty-decrease"
                              onClick={() => handleQtyPlus(item._id, index)}
                            >
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
                        <Grid style={{ fontWeight: "600" }}>
                          {screenSize.dynamicWidth < 900 ? (
                            <Grid
                              my={1}
                              p={1}
                              bgcolor="#80808087"
                              color="white"
                            >
                              Price
                            </Grid>
                          ) : (
                            ""
                          )}
                          {Number(
                            (item.price - (item.price * item.discount) / 100) *
                              Number(item.qty)
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
                    Total Order Cost
                  </Grid>

                  <Grid
                    sm={2}
                    justifyContent="flex-end"
                    textAlign="right"
                    className="cart-total"
                    xs={5}
                  >
                    &#8358; {Number(total).toLocaleString("en-US")}
                  </Grid>
                </Grid>
                <Grid container py={1}>
                  <Grid sm={3} xs={1}></Grid>
                  <Grid sm={7} xs={6}>
                    Pay with Wazo Point
                  </Grid>

                  <Grid
                    sm={2}
                    justifyContent="flex-start"
                    textAlign="right"
                    className="cart-total-point"
                    xs={5}
                    style={{ position: "relative" }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "-40%",
                        left: "0",
                        height: "5px",
                        width: "40px",
                        background: "black",
                      }}
                    ></div>
                    {option ? (
                      <>
                        {" "}
                        {totalPointNaira >= total ? (
                          <>&#8358; {Number(total).toLocaleString("en-US")}</>
                        ) : (
                          <>
                            {" "}
                            &#8358;{" "}
                            {Number(totalPointNaira).toLocaleString("en-US")}
                          </>
                        )}
                      </>
                    ) : (
                      <> &#8358; {Number(0)}</>
                    )}
                  </Grid>
                </Grid>
                <Grid container py={3}>
                  <Grid sm={2} xs={1}></Grid>
                  <Grid sm={7} xs={6}>
                    SubTotal
                  </Grid>

                  <Grid
                    sm={3}
                    justifyContent="flex-start"
                    textAlign="right"
                    className="cart-total-sub"
                    xs={5}
                    style={{ position: "relative", background: "#80808073" }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "40%",
                        left: "-50px",
                        height: "5px",
                        width: "40px",
                        background: "black",
                      }}
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        top: "60%",
                        left: "-50px",
                        height: "5px",
                        width: "40px",
                        background: "black",
                      }}
                    ></div>
                    {option ? (
                      <>
                        {" "}
                        {totalPointNaira >= total ? (
                          <>&#8358; {Number(0).toLocaleString("en-US")}</>
                        ) : (
                          <>
                            &#8358;{" "}
                            {Number(total - totalPointNaira).toLocaleString(
                              "en-US"
                            )}
                          </>
                        )}
                      </>
                    ) : (
                      <>&#8358; {Number(total).toLocaleString("en-US")}</>
                    )}
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
          <Grid container flexDirection="column" textAlign="right" mt={5}>
            {user?.user?.totalPoint >= 250 ? (
              <Grid my={4}>
                <Checkbox {...label} onChange={handleChange} />
                Shop with Wazo point
              </Grid>
            ) : (
              ""
            )}

            {user ? (
              <>
                {option && totalPointNaira >= total ? (
                  <Grid>
                    <Button
                      className="cart-checkout"
                      onClick={handleCartCheckout}
                      style={{ textTransform: "capitalize" }}
                    >
                      Proceed To Checkout
                    </Button>
                  </Grid>
                ) : (
                  <Grid>
                    <PaystackButton
                      className="cart-checkout"
                      {...componentProps}
                    />
                  </Grid>
                )}
              </>
            ) : (
              <Grid>
                <Link
                  className="cart-checkout"
                  to={user ? "/checkout" : "/login"}
                >
                  Proceed To Checkout
                </Link>
              </Grid>
            )}
          </Grid>
        )}
      </Grid>
    </UserLayout>
  );
};

export default Cart;
