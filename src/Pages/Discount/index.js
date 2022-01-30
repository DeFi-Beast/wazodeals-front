import { useState } from "react";
import LayoutLogin from "../../Components/Layouts/LayoutLogin";
import { StyledDiv, StyledLogo } from "../../Components/Logo/Logo";
import Classes from "../../Styles/Login.module.css";
import Logbg from "../../Assets/Logbg.png";
import LoginLogo from "../../Assets/Loginlogo.png";
import  Loader  from "../../Components/Loader";
import axios from "axios";
import { Link } from "react-router-dom";
import BaseURL from "../../Components/Helper"
import { useDispatch, useSelector } from 'react-redux'
import { login } from "../../App/authSlice";


const Discount = () => {
  const [showText, setShowText] = useState(false);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [discount, setDiscount] = useState(null);
  const [merchant, setMerchant] = useState("");
  const [price, setPrice] = useState(null);
  const [point, setPoint] = useState(null);
//   const dispatch = useDispatch(
//   const isLoggedIn = useSelector((state) => state.authSliceReducer)

 

//   {
//     "title":"a",
//     "description":"Nail",
//     "discount":30,
//     "price":20000,
//     "point":100,
//     "merchant":"Mr X"
// }

  const handleSubmitText = (e) => {
    setShow(true);
    e.preventDefault();
    let queryObj = {
      title: title,
      description: description,
      discount:discount,
      merchant:merchant,
      price:price,
      point:point,
    };
    // const config = {
    //     headers: {
    //       "Content-type": "application/json",
    //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   };
   
    axios.post(`${BaseURL}/discount`,queryObj).then(
      (response) => {
        var result = response.data;
        console.log(result);
        // setMessage(result);

        console.log(result);
        if (result.success) {
          console.log(result);
          console.log(result.success)
      
        }
      },
      (error) => {
        console.log(error);
        // setShow(false);
        // setMessage(error.message);
      }
    );
  };
  return (
    <LayoutLogin>
      <div className={Classes.Wrapper}>
        <div className={Classes.LogoWrapper}>
          <StyledDiv>
            <img src={Logbg} alt="amoeba"></img>
          </StyledDiv>

          <Link to={"/"}>
         <StyledLogo src={LoginLogo}></StyledLogo>
         </Link>
        </div>
        <div className={Classes.formContainer}>
          <form
            action="/discount"
            method="POST"
            onSubmit={handleSubmitText}
          >
            <div></div>
            <div>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                name="description"
                id="description"
                placeholder="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                type="number"
                name="price"
                id="price"
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                type="number"
                name="discount"
                id="discount"
                placeholder="discount"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
              <input
                type="number"
                name="point"
                id="point"
                placeholder="point"
                value={point}
                onChange={(e) => setPoint(e.target.value)}
              />
              <input
                type="text"
                name="merchant"
                id="merchant"
                placeholder="merchant"
                value={merchant}
                onChange={(e) => setMerchant(e.target.value)}
              />
              
            </div>
            <button type="submit" className={Classes.button}>
            {show ? (
                <div>
                  <Loader></Loader>
                </div>
              ) : (
                "Discount"
              )}
            </button>
          </form>
          <div className={Classes.formExtended}>
            <a href="/forgot-password" className={Classes.styledLink}>
              Forgot Password?{" "}
            </a>
            <div>
              Don't Have An Account?
              <span>
                <a className={Classes.styledLink} href="/register">
                  Sign Up
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </LayoutLogin>
  );
};

export default Discount;
