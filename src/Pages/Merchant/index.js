// import merchantLayout from "../../Components/Layouts/merchantLayout.js"

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
import Api from "../Api/api";
import { useDispatch, useSelector } from 'react-redux'
import { login } from "../../App/authSlice";



const Merchant = () => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [merchantId, setMerchantId] = useState("");
  const [referred, setReferred] = useState("");
  const [code, setCode] = useState("");
  const [point, setPoint] = useState();
  const [copied, setCopied] = useState(false);
  const isLoggedIn = useSelector((state) => state.authSliceReducer)
  const dispatch = useDispatch()

  // console.log(isLoggedIn)

  

  const CopyToClipboard = () => {
    //   console.log(navigator.clipboard.write.length)
    if (navigator.clipboard.write.length >= 1) {
      setCopied("true");
    }
    navigator.clipboard.writeText(`https://wazodeals.com/register?merchant=${code}`);
  };

  useEffect(() => {
    
   axios.get(`${BaseURL}/merchant`).then((response) => {
      console.log(response);

      // axios.get(`/merchant`).then((response) => {
      const result = response.data;
      //   console.log(result);
      if (result.success) {
        // console.log("merchant");
        // console.log(result.merchants);
      }
    })}, []);

    
    // axios
    //   .get(`${BaseURL}/merchant`, {
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
    //         setCode(result.merchant.referralCode);

    //         // setmerchantId(result.merchantId)

    //         // dispatch(redAction(result.email));
    //         // localStorage.setItem("email", result.email )
    //         // window.location.replace(`/merchant/${result.merchantId}`);
    //         // window.location.replace(`/merchant/${result.merchantId}`);
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

  // setmerchantId(localStorage.getItem("merchantId"))


  // useEffect(() => {
   
  //   dispatch(login())
  

  // let one = `${BaseURL}/merchant}`;
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
  //       setCode(resultOne.merchant.referralCode)

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
  // setmerchantId(localStorage.getItem("merchantId"));
  //   const headers ={
  //     "Content-type": "application/json",
  //     authorization: `Bearer ${localStorage.getItem("token")}`,
  //   }
  //   axios.get(`${BaseURL}/merchant/${merchantId}`)
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
  //   setmerchantId(localStorage.getItem("merchantId"));

  //   console.log(`${merchantId}`);
  //   console.log(`${BaseURL}/merchant/${merchantId}`);
  //   // ${BaseURL}/merchant/${merchantId}
  //   // const headers = {
  //   //   'Content-Type': 'application/json',
  //   //   'X-Auth-Token': `${localStorage.getItem("token")}`,
  //   // };
  //   // axios.get(`${BaseURL}/merchant/${merchantId}`).then((response) => {
  //     axios.get(`${BaseURL}/merchant/${merchantId}`).then((response) => {
  //     console.log(response);
  //     const result = response.data;

  //     // console.log(`${BaseURL}/merchant/${localStorage.getItem("merchantId")}`)
  //     if (result.success) {
  //       console.log(result.merchant);
  //       setCode(result.merchant.referralCode);
  //     }
  //   });

  //   // axios.get(`${BaseURL}/merchant`).then((response) => {
  //   //   console.log(response);

  //   //   // axios.get(`/merchant`).then((response) => {
  //   //   const result = response.data;
  //   //   //   console.log(result);
  //   //   if (result.success) {
  //   //     // console.log("merchant");
  //   //     // console.log(result.merchants);
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
        merchant Dashboard
        <div className={Classes.merchantContainer}>
          <div className={Classes.merchantCard}>
            <div>
              <div className={Classes.merchantCardRow}>
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
          <div className={`${Classes.merchantCard} ${Classes.merchantCardMargin}`}>
            <div className={Classes.merchantCardRow}>
              <h4>Your Referral Code</h4>
            </div>
            <div className={Classes.merchantCodeRow}>
              <div className={Classes.merchantCode}>
                <p ><a href={`https://wazodeals.com/register?merchant=${code}`}> https://wazodeals.com/register?merchant={code}</a></p>
              </div>
              <Button className={Classes.Button} onClick={CopyToClipboard}>
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
            <div style={{ marginTop: "20px", textAlign: "left" }}>
              <h3>Referred : {referred} Persons</h3>
            </div>
          </div>

          <div className={Classes.merchantColumn}>History Review</div>
        </div>
      </div>
    </LayoutDefault>
  );
};

export default Merchant;
