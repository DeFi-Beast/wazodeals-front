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
import Merchant from "./Pages/Merchant";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllMerchants, getAllDiscounts } from "./actions";
import Discounts from "./Pages/Discounts";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMerchants());
    dispatch(getAllDiscounts());
  }, []);
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/food" element={<Food />}></Route>
          <Route path="/user">
            <Route index element={<Login />} />
            <Route
              path="login"
              exact
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route path="signup" element={<Login />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
          <Route path="/signup" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/activate" element={<Activate />}></Route>
          <Route path="/discounts" >
            <Route index element={<Discounts />} />
          </Route>

          <Route path="/user" element={<Users />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/reset-password" element={<Reset />} />
          <Route path="/merchant">
            <Route
              index
              element={
                user?.merchant?.role[0] === "merchant" ? (
                  <Merchant />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/merchant/:id"
              element={
                user?.merchant?.role[0] === "merchant" ? (
                  <Merchant />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route path="login" element={<MerchantForm />} />
            <Route path="become-a-merchant" element={<MerchantForm />} />
          </Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
