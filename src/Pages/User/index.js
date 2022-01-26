// import UserLayout from "../../Components/Layouts/UserLayout.js"

import React, { useState, useEffect, Component } from "react";
import LayoutDefault from "../../Components/Layouts/LayoutDefault";
import Classes from "../../Styles/User.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../Components/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import Pie from "../../Components/Pie";
import BaseURL from "../../Components/Helper";

class User extends Component {

    async componentDidMount() {
    // GET request using axios with async/await
    const response = await axios.get(`${BaseURL}/user/827e656f-42db-445a-8c03-41bea37b393e`).then((response) => {
      console.log(response);
      const result = response.data;
  
      // console.log(`${BaseURL}/user/${localStorage.getItem("userId")}`)
      if (result.success) {
        console.log(result.user);
        // setCode(result.user.referralCode);
      }
    });
}
  render () {
      return (
          <p>Hello World!</p>
      )
  }
}


  
export default User;
