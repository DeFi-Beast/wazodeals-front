import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import ErrorPage from "./Pages/ErrorPage";
import Food from "./Pages/Food";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Activate from "./Pages/Activate";
import User from "./Pages/User";
import Users from "./Pages/Users";
import Forgot from "./Pages/Forgot";
import Reset from "./Pages/Reset";
// import Discounts from "./Pages/Discounts";
import MerchantForm from "./Pages/Become-A-Merchant";
import Merchants from "./Pages/Merchants";

import Faq from "./Pages/Faq";
import Terms from "./Pages/terms";
import Privacy from "./Pages/privacy";
import Merchant from "./Pages/Merchants/Merchant";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllMerchants, getAllDiscounts } from "./actions";
import { getAllCoupons } from "./actions/coupon";
import { getReceiptById } from "./actions/receipts";
import Discount from "./Pages/Discounts/Discount";
import Discounts from "./Pages/Discounts";
import Cart from "./Pages/Cart";
import Dashboard from "../src/Components/Dashboard/Dashboard";
import Deals from "./Pages/Deals";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { updateUserTotalPoint } from "./actions/user";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const { receipt } = useSelector((state) => state.receipts);

  let [newReceipts, setNewReceipts] = useState(null);
  let [receiptTotal, setReceiptTotal] = useState(null);
  let [newReferrals, setNewReferrals] = useState(null);

  console.log(receipt);

  useEffect(() => {
    const receiptTotal = receipt?.receipt?.filter((receipt) => {
      return (
        new Date(receipt.createdAt).getTime() >=
        new Date(user?.user?.redeemDate).getTime()
      );
    }).reduce(function (previousValue, currentValue) {
      return (
        previousValue +
        currentValue.point 
      )
    }, 0);
    return setReceiptTotal(receiptTotal)

    // new Date(receipt.createdAt).getTime() >= new Date(user?.user?.redeemDate).getTime()
  }, [user]);
  // useEffect(() => {
  //   receiptTotal = receipt?.receipt?.reduce(function (
  //     previousValue,
  //     currentValue
  //   ) {
  //     return previousValue + currentValue.point;
  //   },
  //   0);
  //   return setReceiptTotal(receiptTotal);
  // }, [user]);

  console.log(receiptTotal);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMerchants());
    dispatch(getAllDiscounts(1));
    dispatch(getAllCoupons(1));
  
  }, []);

  useEffect(() => {
    dispatch(getReceiptById(user?.user?._id));
  }, [user?.user?._id]);
  useEffect(() => {
    const newReferrals = user?.user?.referrals.filter((referral) => {
      return (
        new Date(referral.signupDate).getTime() >=
        new Date(user?.user?.redeemDate).getTime()
      );
    })    

    setNewReferrals(newReferrals)
  }, [user?.user?._id]);

  const totalPoint =
    user?.user?.point + newReferrals?.length * 12.5 + receiptTotal;

  useEffect(() => {
    dispatch(updateUserTotalPoint(user?.user?._id, { totalPoint }));
  }, [totalPoint]);

  return (
    <Router>
      <div className="App">
        {/* <button onClick={notify}>Notify !</button> */}
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/food" element={<Food />}></Route>
          <Route
            path="login"
            exact
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="signup"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/signup" element={<Login />}></Route>
          <Route path="/activate" element={<Activate />}></Route>
          <Route path="/discounts">
            <Route index element={<Discounts />} />
            <Route path=":id" element={<Discount />} />
          </Route>

          <Route path="/user" element={<Users />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/reset-password" element={<Reset />} />
          <Route path="/merchant" element={<Merchant />} />
          <Route path="/merchants">
            <Route
              index
              element={
                user?.merchant?.role[0] === "merchant" ? (
                  <Merchants />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route path="/merchants/discounts/:id" element={<Merchants />} />

            <Route path="/merchants/dashboard" element={<Dashboard />} />
            <Route
              path="/merchants/dashboard/:id"
              element={
                user?.merchant?.role[0] === "merchant" ? (
                  <Dashboard />
                ) : (
                  // <Navigate to="/" />
                  <Dashboard />
                )
              }
            />

            <Route path="login" element={<MerchantForm />} />
            <Route path="become-a-merchant" element={<MerchantForm />} />
          </Route>

          <Route path="/deals">
            <Route index element={<Deals />} />
            <Route path="discounts">
              <Route index element={<Deals />} />
              <Route path="search" exact element={<Deals />} />
            </Route>

            <Route path="coupons" element={<Deals />} />
          </Route>

          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-and-condition" element={<Terms />} />

          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
