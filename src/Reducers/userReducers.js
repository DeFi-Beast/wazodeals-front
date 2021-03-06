import { USER_UPDATE } from "../constants";

let userData = {};

const authReducers = (state = { Auth: null, isLoading: false }, action) => {
  switch (action.type) {
    case USER_UPDATE:
      userData = JSON.parse(localStorage.getItem("profile"));
      userData.user = action?.data?.user;
      localStorage.setItem("profile", JSON.stringify(userData));

      return { ...state, Auth: userData };

    default:
      return state;
  }
};

export default authReducers;
