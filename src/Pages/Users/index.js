// import UserLayout from "../../Components/Layouts/UserLayout.js"

import { useState, useEffect } from "react";
import LayoutDefault from "../../Components/Layouts/LayoutDefault";
import Classes from "../../Styles/User.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../Components/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import Pie from "../../Components/Pie"
import BaseURL from "../../Components/Helper"

const Users = () => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [points, setPoint] = useState(0);
  const [copied, setCopied] = useState(false);

  const CopyToClipboard = () => {
      
          console.log(navigator.clipboard.write.length)
      if (navigator.clipboard.write.length >= 1){
          setCopied("true")
      }
    navigator.clipboard.writeText()
  }

  useEffect(() => {

    console.log(BaseURL)
    
    axios.get(`${BaseURL}/user`).then((response) => {
      const result = response.data;
      console.log(result);
      if (result.success) {
        console.log("user");
        console.log(result.users);
       
      }
    });
  });

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

                <Pie>
                 
                 </Pie>
                </div>
                
              </div>
              <Button className={Classes.Button} disabled>
                <Link to={"/"}>Redeem Points</Link>
              </Button>
            </div>
          </div>
          <div className={`${Classes.UserCard} ${Classes.UserCardMargin}`}>
            <div className={Classes.UserCardRow}>
               <h4>
               Your Referral Code
                   </h4> 
                </div>
            <div className={Classes.UserCodeRow}>
              <div className={Classes.UserCode}>
                 <p>Code</p> 
              </div>
              <Button className={Classes.Button} onClick={CopyToClipboard}>{copied ?"Copied!" : "Copy"}</Button>
            </div>
            <p>Referred</p>
          </div>

          <div className={Classes.UserColumn}>
              History Review
          </div>
        </div>
      </div>
    </LayoutDefault>
  );
};

export default Users;
