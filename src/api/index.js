import axios from "axios";
import { saveAs } from 'file-saver';

const API = axios.create({ baseURL: "http://localhost:5000" });
// const API = axios.create({baseURL:'https://wazodeal.herokuapp.com'})

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchAllDiscounts = (page) => API.get(`/discounts?page=${page}`);
export const fetchDiscountById = (id) => API.get(`/discounts/${id}`);
export const fetchDiscountsBySearch = (searchQuery) =>
  API.get(
    `/discountsSearch/search?merchant=${searchQuery.merchant || ""}&category=${
      searchQuery.category || ""
    }&discount=${searchQuery.discount || ""}`
  );
export const updateDiscount = (id, discount) =>
  API.patch(`/discounts/${id}`, discount);
export const fetchAllMerchants = () => API.get("/merchant");
// export const fetchDiscount = (id) =>  API.get(`/discount/${id}`)

export const userSignIn = (user) => API.post(`/user/login`, user);
export const userSignup = (user) => API.post(`/user/signup`, user);
export const userActivate = (user) => API.patch(`/activate`, user);
export const userForgot = (email) => API.patch(`/forgot`, email);
export const userReset = (user) => API.patch(`/reset`, user);
export const updateUser = (profile) =>
  API.patch(`/user/${profile.id}`, profile);
export const updateUserTotalPoint = (id, value) =>
  API.patch(`/user/point/${id}`, value);

export const merchantSignIn = (merchant) =>
  API.get(`/merchant/login`, merchant);
export const merchantSignup = (merchant) =>
  API.post(`/merchant/signup`, merchant);

export const createReceipt = (receipt) => API.post(`/receipts`, receipt);
export const fetchReceiptById = (id) => API.get(`/receipts/${id}`);

export const createWallet = (wallet) => API.post(`/wallets`, wallet);
export const payment = () => API.post(`/payment`);

export const postOrder = (order) => API.post(`/order`, order);
export const createPDF = (pdf) =>
  API.post(`/create-pdf`, pdf).then(() =>
    axios.get("fetch-pdf", { responseType: "blob" })
  ).then((res) => {
    const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

    saveAs(pdfBlob, 'newPdf.pdf');
  })


  export const fetchAllCoupons = (paged) => API.get(`/coupons?page=${paged}`);
export const fetchCouponById = (id) => API.get(`/coupons/${id}`);
export const fetchCouponsBySearch = (searchQuery) =>
  API.get(
    `/discountsSearch/search?merchant=${searchQuery.merchant || ""}&category=${
      searchQuery.category || ""
    }&coupons=${searchQuery.coupons || ""}`
  );
export const updateCoupon = (id, coupons) =>
  API.patch(`/coupons/${id}`, coupons);
export const updateCouponClick = (couponId, userData) =>
  API.patch(`/coupons/click/${couponId}`, userData);