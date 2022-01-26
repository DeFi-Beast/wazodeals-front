import axios from "axios";

/**
 * @class Api
 * @description Contains methods for making asynchronous Http requests
 * @exports Api
 */

const BASE_URL =
  "https://covidreliefbackend.covidrelief.com.ng/schoolcredit/public/index.php/api";

class Api {
  static ENDPOINTS = {
    url: BASE_URL,
  };

  /**
   * @method get
   * @description makes a GET request
   * @param {string} url The request url
   * @param {object} data The request params
   * @returns {object} request reponse in JSON format
   */

  /**
   * @method post
   * @description makes a POST request
   * @param {string} url The request url
   * @param {object} data The request params
   * @returns {object} request reponse in JSON format
   */

  static async post(url, data, token) {
    try {
      const res = await axios({
        method: "post",
        url,
        data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    } catch (err) {
      if (!err.response) return "Network Error";
      return err.response.data;
    }
  }

  static async put(url, data, token) {
    try {
      const res = await axios({
        method: "put",
        url,
        data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    } catch (err) {
      if (!err.response) return "Network Error";
      return err.response.data;
    }
  }
  static async patch(url, data, token) {
    try {
      const res = await axios({
        method: "patch",
        url,
        data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    } catch (err) {
      if (!err.response) return "Network Error";
      return err.response.data;
    }
  }

  static async get(url) {
    try {
      const res = await axios({
        method: "get",
        url,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });

      return res.data;
    } catch (err) {
      if (!err.response) return "Network Error";
      return err.response.data;
    }
  }

  static async delete(url, token) {
    try {
      const res = await axios({
        method: "delete",
        url,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    } catch (err) {
      if (!err.response) return "Network Error";
      return err.response.data;
    }
  }
}

export default Api;
