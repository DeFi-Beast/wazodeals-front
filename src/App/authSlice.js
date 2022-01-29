import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth', // Could name it anything
    initialState: {
      isLoggedIn: false,
      userId:"",
      token:"",
      email:""
    },
    reducers: {
      login: (state) => {
        state.isLoggedIn = true
        state.userId = localStorage.getItem("userId")
        state.token = localStorage.getItem("token")
        state.email = localStorage.getItem("email")
      },
      logout: (state) => {
        state.isLoggedIn = false
        state.userId = localStorage.setItem("userId", "")
        state.token = localStorage.setItem("token", "")
        state.email = localStorage.setItem("email", "")
      },
    },
  })

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer