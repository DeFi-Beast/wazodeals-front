import axios from "axios";

const API = axios.create({baseURL:'http://localhost:5000'})


export const fetchAllDiscounts =() => API.get('/discounts')
export const updateDiscount =(id, discount) => API.patch(`/discounts/${id}`, discount)
export const fetchAllMerchants =() => API.get('/merchant')
// export const fetchDiscount = (id) =>  API.get(`/discount/${id}`)

export const userSignIn =(user) => API.post(`/user/login`, user)
export const userSignup =(user) => API.post(`/user/signup`, user)
export const merchantSignIn =(merchant) => API.get(`/merchant/login`, merchant)
export const merchantSignup =(merchant) => API.post(`/merchant/signup`, merchant)
