// import UserLayout from "../../Components/Layouts/UserLayout.js"

import { useState, useEffect } from "react";
import LayoutDefault from "../../Components/Layouts/LayoutDefault";
import Classes from "../../Styles/User.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../Components/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import Pie from "../../Components/Pie";
import BaseURL from "../../Components/Helper";
import Api from "../../Pages/Api/api";
import { useDispatch, useSelector } from 'react-redux'
import { login } from "../../App/authSlice";



const User = () => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
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
    navigator.clipboard.writeText(`${code}`);
  };

  // useEffect(() => {
  //   let queryObj = {
  //     userId: localStorage.getItem("userId"),
  //   };

  //   axios
  //     .get(`${BaseURL}/user/${userId}`, {
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //     })
  //     .then(
  //       (response) => {
  //         console.log(response);
  //         var result = response.data;
  //         console.log(result);

  //         console.log(result);
  //         if (result.success) {
  //           console.log(result);
  //           console.log(result.success);
  //           setCode(result.user.referralCode);

  //           // setUserId(result.userId)

  //           // dispatch(redAction(result.email));
  //           // localStorage.setItem("email", result.email )
  //           // window.location.replace(`/user/${result.userId}`);
  //           // window.location.replace(`/user/${result.userId}`);
  //           // props.history.push('/')
  //         }
  //       },
  //       (error) => {
  //         console.log(error);
  //         // setShow(false);
  //         // setMessage(error.message);
  //       }
  //     );

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

  // setUserId(localStorage.getItem("userId"))


  useEffect(() => {
   
    dispatch(login())
  

  let one = `${BaseURL}/user/${localStorage.getItem("userId")}`;
  let two = `${BaseURL}/referred`;
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const requestOne = axios.get(one, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  const requestTwo = axios.get(two, config);

  axios
    .all([requestOne, requestTwo])
    .then(
      axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];

        // use/access the results
        console.log(responseOne, responseTwo);
        
        const resultOne = responseOne.data;
        setCode(resultOne.user.referralCode)

            const resultTwo = responseTwo.data;
        console.log(resultTwo);
      if (resultTwo.success) {
        let accounts = [];
        resultTwo.accounts.map((account) => {
          if (account.active) {
            return (accounts.push(account))
          } else console.log("not referred");
        });
        console.log(accounts);
        console.log(resultTwo.accounts);
        setPoint(1000 + accounts.length * 500);
        setReferred(accounts.length);
      }
      })
    )
    .catch((errors) => {
      // react on errors.
      console.error(errors);
    });

  }, [])

  // useEffect(() => {
  // setUserId(localStorage.getItem("userId"));
  //   const headers ={
  //     "Content-type": "application/json",
  //     authorization: `Bearer ${localStorage.getItem("token")}`,
  //   }
  //   axios.get(`${BaseURL}/user/${userId}`)
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
  //   setUserId(localStorage.getItem("userId"));

  //   console.log(`${userId}`);
  //   console.log(`${BaseURL}/user/${userId}`);
  //   // ${BaseURL}/user/${userId}
  //   // const headers = {
  //   //   'Content-Type': 'application/json',
  //   //   'X-Auth-Token': `${localStorage.getItem("token")}`,
  //   // };
  //   // axios.get(`${BaseURL}/user/${userId}`).then((response) => {
  //     axios.get(`${BaseURL}/user/${userId}`).then((response) => {
  //     console.log(response);
  //     const result = response.data;

  //     // console.log(`${BaseURL}/user/${localStorage.getItem("userId")}`)
  //     if (result.success) {
  //       console.log(result.user);
  //       setCode(result.user.referralCode);
  //     }
  //   });

  //   // axios.get(`${BaseURL}/user`).then((response) => {
  //   //   console.log(response);

  //   //   // axios.get(`/user`).then((response) => {
  //   //   const result = response.data;
  //   //   //   console.log(result);
  //   //   if (result.success) {
  //   //     // console.log("user");
  //   //     // console.log(result.users);
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
        User Dashboard
        <div className={Classes.UserContainer}>
          <div className={Classes.UserCard}>
            <div>
              <div className={Classes.UserCardRow}>
                <FontAwesomeIcon icon={faUserCheck} />
                <div className="circularContainer">
                  <Pie point={point}></Pie>
                </div>
              </div>
              <Button className={Classes.Button} disabled>
                <Link to={"/"}>Redeem Points</Link>
              </Button>
            </div>
          </div>
          <div className={`${Classes.UserCard} ${Classes.UserCardMargin}`}>
            <div className={Classes.UserCardRow}>
              <h4>Your Referral Code</h4>
            </div>
            <div className={Classes.UserCodeRow}>
              <div className={Classes.UserCode}>
                <p style={{ fontSize: "16px" }}>{code}</p>
              </div>
              <Button className={Classes.Button} onClick={CopyToClipboard}>
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
            <div style={{ marginTop: "20px", textAlign: "left" }}>
              <h3>Referred : {referred} Persons</h3>
            </div>
          </div>

          <div className={Classes.UserColumn}>History Review</div>
        </div>
      </div>
    </LayoutDefault>
  );
};

export default User;
