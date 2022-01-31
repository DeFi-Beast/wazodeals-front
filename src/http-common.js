import axios from "axios";

export default axios.create({
  baseURL: "https://wazodeal.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});