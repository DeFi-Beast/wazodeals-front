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
import Discount from "./Pages/Discounts/Discount";
import Discounts from "./Pages/Discounts";
import Cart from "./Pages/Cart";
import Dashboard from "../src/Components/Dashboard/Dashboard";
import Deals from "./Pages/Deals"
import { ToastContainer, toast } from 'react-toastify';


  import 'react-toastify/dist/ReactToastify.css';
import { createWallet } from "./actions/wallets";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  
  const wallet = {
    firstName:"test",
    lastName:"test",
    email:user?.user?.email,
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMerchants());
    dispatch(getAllDiscounts(1));
    if(user) {
    dispatch(createWallet(wallet));
    }
  }, []);

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
          <Route path="signup" element={!user ? <Login /> : <Navigate to="/" />} />
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
            <Route
              index
              element={<Deals/>
              }
            />
            <Route path="discounts"  >
            <Route
              index
              element={<Deals/>
              }
            />
          <Route path="search" exact element={<Deals/>}/>

              </Route>

            <Route path="coupons" element={<Deals/>} />
           
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
