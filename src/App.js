import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Merchant from "./Pages/Merchant/Index";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllMerchants, getAllDiscounts } from "./actions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMerchants());
    dispatch(getAllDiscounts());
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/food" element={<Food />}></Route>
          <Route path="/user" element={<Login />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Login />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
          <Route path="/signup" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/activate" element={<Activate />}></Route>
          {/* <Route path="/discount" element={<Discounts />}></Route> */}

          <Route path="/user" element={<Users />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/reset-password" element={<Reset />} />
          <Route path="/merchant" element={<MerchantForm />}>
            <Route index element={<MerchantForm />} />
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
