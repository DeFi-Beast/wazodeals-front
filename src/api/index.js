import axios from "axios";

const API = axios.create({baseURL:'http://localhost:5000'})
// const API = axios.create({baseURL:'https://wazodeal.herokuapp.com'})


API.interceptors.request.use((req)=> {
    if(localStorage.getItem("profile")){
        req.headers.Authorization =`Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
    }
    return req
})

export const fetchAllDiscounts =(page) => API.get(`/discounts?page=${page}`)
export const fetchDiscountById =(id) => API.get(`/discounts/${id}`)

export const fetchDiscountsBySearch =(searchQuery) => API.get(`/discountsSearch/search?merchant=${searchQuery.merchant || ''}&category=${searchQuery.category || ''}&discount=${searchQuery.discount || ''}`)
export const updateDiscount =(id, discount) => API.patch(`/discounts/${id}`, discount)
export const fetchAllMerchants =() => API.get('/merchant')
// export const fetchDiscount = (id) =>  API.get(`/discount/${id}`)

export const userSignIn =(user) => API.post(`/user/login`, user)
export const userSignup =(user) => API.post(`/user/signup`, user)
export const userActivate =(user) => API.patch(`/activate`, user)
export const userForgot =(email) => API.patch(`/forgot`, email)
export const userReset =(user) => API.patch(`/reset`, user)
export const updateUser =(profile) => API.patch(`/user/${profile.id}`, profile)


export const merchantSignIn =(merchant) => API.get(`/merchant/login`, merchant)
export const merchantSignup =(merchant) => API.post(`/merchant/signup`, merchant)



export const createReceipt =(receipt) => API.post(`/receipts`, receipt)
export const fetchReceiptById =(id) => API.get(`/receipts/${id}`)

export const createWallet =(wallet) => API.post(`/wallets`, wallet)
