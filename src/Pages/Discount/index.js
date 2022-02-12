// import discountLayout from "../../Components/Layouts/discountLayout.js"

import { useState, useEffect } from "react";
import LayoutDefault from "../../Components/Layouts/LayoutDefault";
import Classes from "../../Styles/User.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../Components/Button";
import { Link } from "react-router-dom";
import axios from "axios";
// import Pie from "../../Components/Pie";
import BaseURL from "../../Components/Helper";
import Api from "../../Pages/Api/api";
import { useDispatch, useSelector } from 'react-redux'
import { login } from "../../App/authSlice";



const Discount = () => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [discountId, setdiscountId] = useState("");
  const [referred, setReferred] = useState("");
  const [code, setCode] = useState("");
  const [point, setPoint] = useState();
  const [copied, setCopied] = useState(false);
  const isLoggedIn = useSelector((state) => state.authSliceReducer)
  const dispatch = useDispatch()

  console.log(isLoggedIn)

  

  const CopyToClipboard = () => {
    //   console.log(navigator.clipboard.write.length)
    if (navigator.clipboard.write.length >= 1) {
      setCopied("true");
    }
    navigator.clipboard.writeText(`https://wazodeals.com/register?discount=${code}`);
  };

  useEffect(() => {
    
   axios.get(`${BaseURL}/discount`).then((response) => {
      console.log(response);

      // axios.get(`/discount`).then((response) => {
      const result = response.data;
      //   console.log(result);
      if (result.success) {
        // console.log("discount");
        // console.log(result.discounts);
      }
    })});

    
    // axios
    //   .get(`${BaseURL}/discount`, {
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //   })
    //   .then(
    //     (response) => {
    //       console.log(response);
    //       var result = response.data;
    //       console.log(result);

    //       console.log(result);
    //       if (result.success) {
    //         console.log(result);
    //         console.log(result.success);
    //         setCode(result.discount.referralCode);

    //         // setdiscountId(result.discountId)

    //         // dispatch(redAction(result.email));
    //         // localStorage.setItem("email", result.email )
    //         // window.location.replace(`/discount/${result.discountId}`);
    //         // window.location.replace(`/discount/${result.discountId}`);
    //         // props.history.push('/')
    //       }
    //     },
    //     (error) => {
    //       console.log(error);
    //       // setShow(false);
    //       // setMessage(error.message);
    //     }
    //   )});

  //   const config = {
  //     headers: {
  //       "Content-type": "application/json",
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   };
  //   axios.get(`${BaseURL}/referred`, config).then((response) => {
  //     // axios.get(`/referred`, config).then((response) => {
  //     const result = response.data;
  //     //   console.log(result);
  //     if (result.success) {
  //       let accounts = [];
  //       result.accounts.map((account) => {
  //         if (account.active) {
  //           return accounts.push(account);
  //         } else console.log("not referred");
  //       });
  //       console.log(accounts);
  //       console.log(result.accounts);
  //       setPoint(100 + accounts.length * 30);
  //       setReferred(accounts.length);
  //     }
  //   });
  // }, []);

  // setdiscountId(localStorage.getItem("discountId"))


  // useEffect(() => {
   
  //   dispatch(login())
  

  // let one = `${BaseURL}/discount}`;
  // let two = `${BaseURL}/referred`;
  // const config = {
  //   headers: {
  //     "Content-type": "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //     Authorization: `Bearer ${localStorage.getItem("token")}`,
  //   },
  // };

  // const requestOne = axios.get(one, {
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //   },
  // });
  // const requestTwo = axios.get(two, config);

  // axios
  //   .all([requestOne, requestTwo])
  //   .then(
  //     axios.spread((...responses) => {
  //       const responseOne = responses[0];
  //       const responseTwo = responses[1];

  //       // use/access the results
  //       console.log(responseOne, responseTwo);
        
  //       const resultOne = responseOne.data;
  //       setCode(resultOne.discount.referralCode)

  //           const resultTwo = responseTwo.data;
  //       console.log(resultTwo);
  //     if (resultTwo.success) {
  //       let accounts = [];
  //       resultTwo.accounts.map((account) => {
  //         if (account.active) {
  //           return (accounts.push(account))
  //         } else console.log("not referred");
  //       });
  //       console.log(accounts);
  //       console.log(resultTwo.accounts);
  //       setPoint(500 + accounts.length * 250);
  //       setReferred(accounts.length);
  //     }
  //     })
  //   )
  //   .catch((errors) => {
  //     // react on errors.
  //     console.error(errors);
  //   });

  // }, [])

  // useEffect(() => {
  // setdiscountId(localStorage.getItem("discountId"));
  //   const headers ={
  //     "Content-type": "application/json",
  //     authorization: `Bearer ${localStorage.getItem("token")}`,
  //   }
  //   axios.get(`${BaseURL}/discount/${discountId}`)
  //     .then((res) => res.json())
  //     .then(
  //       (data) => {
  //         console.log(data)
  //       },
  //       (error) => {
  //         console.log(error)
  //       }
  //     );
  // }, []);

  // useEffect(() => {
  //   // setEmail(localStorage.getItem("email"));
  //   setToken(localStorage.getItem("token"));
  //   setdiscountId(localStorage.getItem("discountId"));

  //   console.log(`${discountId}`);
  //   console.log(`${BaseURL}/discount/${discountId}`);
  //   // ${BaseURL}/discount/${discountId}
  //   // const headers = {
  //   //   'Content-Type': 'application/json',
  //   //   'X-Auth-Token': `${localStorage.getItem("token")}`,
  //   // };
  //   // axios.get(`${BaseURL}/discount/${discountId}`).then((response) => {
  //     axios.get(`${BaseURL}/discount/${discountId}`).then((response) => {
  //     console.log(response);
  //     const result = response.data;

  //     // console.log(`${BaseURL}/discount/${localStorage.getItem("discountId")}`)
  //     if (result.success) {
  //       console.log(result.discount);
  //       setCode(result.discount.referralCode);
  //     }
  //   });

  //   // axios.get(`${BaseURL}/discount`).then((response) => {
  //   //   console.log(response);

  //   //   // axios.get(`/discount`).then((response) => {
  //   //   const result = response.data;
  //   //   //   console.log(result);
  //   //   if (result.success) {
  //   //     // console.log("discount");
  //   //     // console.log(result.discounts);
  //   //   }
  //   // });
  //   // const config = {
  //   //   headers: {
  //   //     "Content-type": "application/json",
  //   //     Authorization: `Bearer ${localStorage.getItem("token")}`,
  //   //   },
  //   // };
  //   // axios.get(`${BaseURL}/referred`, config).then((response) => {
  //   //   // axios.get(`/referred`, config).then((response) => {
  //   //   const result = response.data;
  //   //   //   console.log(result);
  //   //   if (result.success) {
  //   //     let accounts = [];
  //   //     result.accounts.map((account) => {
  //   //       if (account.active) {
  //   //         return accounts.push(account);
  //   //       } else console.log("not referred");
  //   //     });
  //   //     console.log(accounts);
  //   //     console.log(result.accounts);
  //   //     setPoint(100 + accounts.length * 30);
  //   //     setReferred(accounts.length);
  //   //   }
  //   // });
  // });

  return (
    <LayoutDefault>
      <div className="Row">
        discount Dashboard
        <div className={Classes.discountContainer}>
          <div className={Classes.discountCard}>
            <div>
              <div className={Classes.discountCardRow}>
                <FontAwesomeIcon icon={faUserCheck} />
                <div className="circularContainer">
                  {/* <Pie point={point}></Pie> */}
                </div>
              </div>
              <Button className={Classes.Button} disabled>
                <Link to={"/"}>Redeem</Link>
              </Button>
            </div>
          </div>
          <div className={`${Classes.discountCard} ${Classes.discountCardMargin}`}>
            <div className={Classes.discountCardRow}>
              <h4>Your Referral Code</h4>
            </div>
            <div className={Classes.discountCodeRow}>
              <div className={Classes.discountCode}>
                <p ><a href={`https://wazodeals.com/register?discount=${code}`}> https://wazodeals.com/register?discount={code}</a></p>
              </div>
              <Button className={Classes.Button} onClick={CopyToClipboard}>
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
            <div style={{ marginTop: "20px", textAlign: "left" }}>
              <h3>Referred : {referred} Persons</h3>
            </div>
          </div>

          <div className={Classes.discountColumn}>History Review</div>
        </div>
      </div>
    </LayoutDefault>
  );
};

export default Discount;
