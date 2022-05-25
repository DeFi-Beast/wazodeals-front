import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDiscountById } from "../../../actions";
import UserLayout from "../../../Components/Layouts/UserLayout";
import { Grid, Typography, Chip } from "@mui/material";
import BreadCrumbs from "../../../Components/BreadCrumbs";
import { PaystackButton } from "react-paystack";
import { postOrder } from "../../../actions/order";

import "./styles.css";

const initialOrderState = {
  userId: JSON.parse(localStorage.getItem("profile"))?.user?._id,
  order: [],
  amount_paid: null,
  paystack_ref: "",
  orderTotal: null,
};

const Discount = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(0);
  const { discount } = useSelector((state) => state.discounts.discount);
  const files = discount?.campaignFiles || discount?.selectedFiles.split("|");
  const { merchants } = useSelector((state) => state.merchants);
  const merchant = merchants?.merchant?.find(
    (merchant) => merchant?._id === discount?.merchant
  );
  const categories = discount?.categories;
  const cart = JSON.parse(localStorage.getItem("cart"));
  const [cartText, setCartText] = useState(false);
  let activeMerchant = merchant?.merchantName || merchant?.merchant;
  const [total, setTotal] = useState(0);
  const user = JSON.parse(localStorage.getItem("profile"));
  const [orderData, setOrderData] = useState(initialOrderState);

  localStorage.setItem("merchant", activeMerchant);

  const config = {
    reference: new Date().getTime().toString(),
    email: user?.user?.email,
    amount: (total * 100).toFixed(0),
    callback: function (response) {
      let message = "Payment complete! Reference: " + response.reference;
      alert(message);
    },
    publicKey: "pk_live_82bde11c458f4742f21b07d93ee6c5567a8ce755",
  };

  useEffect(() => {
    dispatch(getDiscountById(id));
  }, [id]);

  const handleSelectedImg = (index) => {
    setSelected(index);
  };

  const handleAddToCart = (discount) => {
    dispatch({ type: "ADD_TO_CART", payload: discount });
  };

  useEffect(() => {
    if (cart?.length > 0) {
      const check = cart?.find((cart) => cart._id === discount?._id);
      if (check) {
        setCartText(true);
      }
    }
  }, [id]);

  useEffect(() => {
    setTotal(discount?.price - (discount?.price * discount?.discount) / 200);
    let orderItem = [];

    setOrderData({
      ...orderData,
      orderTotal:
        discount?.price - (discount?.price * discount?.discount) / 200,
      amount_paid:
        discount?.price -
        ((discount?.price * discount?.discount) / 200)?.toFixed(0),
      order: [
        {
          productId: discount?._id,
          orderQty: 1,
          orderPrice:
            (discount?.price - (discount?.price * discount?.discount) / 200) *
            1,
        },
      ],
    });
  }, [discount]);

  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    setOrderData({ ...orderData, paystack_ref: reference?.reference });
    if (reference?.reference) {
      // console.log((orderData))
      dispatch(postOrder(orderData));
    }
    let message = "Payment complete! Reference: " + reference.reference;

    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    // console.log('closed')
  };

  const componentProps = {
    ...config,
    text: "Buy Deal",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <UserLayout>
      <div className="Row RowPadding containerpadding">
        <BreadCrumbs />
        <Grid container mt={5}>
          <Grid container sm={6} xs={10} m="0 auto">
            <Grid item>
              <img src={files?.[selected]?.base64} alt="image" />
            </Grid>
            <Grid container sm={12} display="block">
              {files?.slice(0, 3).map((file, index) => (
                <Grid
                  item
                  key={index}
                  onClick={() => handleSelectedImg(index)}
                  className={selected === index ? "selectedImg" : ""}
                  xs={3}
                  sm={2}
                >
                  <img src={file.base64} alt="image" />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item sm={6} xs={12} p={4}>
            <h2 className="product-title">{discount?.title}</h2>
            <Grid
              className="product-info"
              container
              justifyContent="space-between"
              mt={4}
            >
              <Grid item>
                by: <span>{merchant?.merchantName || merchant?.merchant}</span>
              </Grid>
              <Grid item>
                for:{" "}
                <span>
                  &#8358;
                  {discount?.price -
                    (discount?.price * discount?.discount) / 200}
                </span>
              </Grid>
              <Grid item>
                at: <span>{discount?.discount / 2}% </span>discount
              </Grid>
            </Grid>
            <Grid mt={3}>
              {categories?.map((category) => (
                <Chip
                  label={`${category}`}
                  component="a"
                  href={`/${category}`}
                  variant="outlined"
                  clickable
                  className="chipLinks"
                />
              ))}
            </Grid>
            <Grid mt={3}>
              <h4>Description</h4>
              <Grid pt={3}>
                <Typography style={{ textTransform: "capitalize" }}>
                  {discount?.description}
                </Typography>
              </Grid>
            </Grid>
            <Grid mt={5} container justifyContent="flex-end">
              <Grid container sm={6} className="product-cart">
                <Link to="#" onClick={() => handleAddToCart(discount)}>
                  {cartText ? (
                    <span style={{ color: "black" }}>Added</span>
                  ) : (
                    "Add To Cart"
                  )}
                </Link>
                {user ? (
                  <PaystackButton className="buyBtn" {...componentProps} />
                ) : (
                  <Link className="buyBtn" to="/login">
                    Buy Deal
                  </Link>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid mt={4} p={5}>
          Similar Items
        </Grid>
      </div>
    </UserLayout>
  );
};

export default Discount;
