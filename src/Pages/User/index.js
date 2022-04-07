// import UserLayout from "../../Components/Layouts/UserLayout.js"

import { useState, useEffect } from "react";
import Classes from "../../Styles/User.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../Components/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import Pie from "../../Components/Pie";
import BaseURL from "../../Components/Helper";
import { useDispatch, useSelector } from 'react-redux'
import UserLayout from "../../Components/Layouts/UserLayout";




const User = () => {

  const [referred, setReferred] = useState("");
  const [copied, setCopied] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"))
 
  const dispatch = useDispatch()

  const CopyToClipboard = () => {
    //   console.log(navigator.clipboard.write.length)
    if (navigator.clipboard.write.length >= 1) {
      setCopied("true");
    }
    navigator.clipboard.writeText(`https://wazodeals.com/signup?user=${user?.user?.referralCode}`);
  };

  

const totalPoint =  user?.user?.point + (user?.user?.referrals.length * 12.5)

console.log(totalPoint)
  
  return (
    <UserLayout>
      <div className="Row RowPadding">
        <p style={{marginBottom:"10px"}}>
        Welcome, <h4 style={{display:"inline"}}>{user?.user?.name || "Anon"}</h4> 

        </p>
        <div className={Classes.UserContainer}>
          <div className={Classes.UserCard}>
            <div>
              <div className={Classes.UserCardRow}>
                <FontAwesomeIcon icon={faUserCheck} />
                <div className="circularContainer">
                  <Pie point={totalPoint}></Pie>
                </div>
              </div>
              <Button className={Classes.Button} disabled={totalPoint >= 125 ? false : true}>
                <Link to={totalPoint >= 125 ? "/" : "#"}>
                
                  Redeem
                 
                  </Link>
              </Button>
            </div>
          </div>
          <div className={`${Classes.UserCard} ${Classes.UserCardMargin}`}>
            <div className={Classes.UserCardRow}>
              <h4>Your Referral Code</h4>
            </div>
            <div className={Classes.UserCodeRow}>
              <div className={Classes.UserCode}>
                <p ><a href={`https://wazodeals.com/signup?user=${user?.user?.referralCode}`}> https://wazodeals.com/signup?user={user?.user?.referralCode}</a></p>
              </div>
              <Button className={Classes.Button} onClick={CopyToClipboard}>
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
            <div style={{ marginTop: "20px", textAlign: "left" }}>
              <h3>Referred : {user?.user?.referrals.length} Persons</h3>
            </div>
          </div>

          <div className={Classes.UserColumn}>History Review</div>
        </div>
      </div>
    </UserLayout>
  );
};

export default User;
