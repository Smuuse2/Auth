import { configureStore } from "@reduxjs/toolkit";
import { signUpSlice } from "./slices/AuthSlice";
import { loginSlice } from "./slices/LoginSlice";
import userInfoSlice from "./slices/UserInfo";

const  store = configureStore({
    reducer: {
        singing: signUpSlice.reducer,
        login : loginSlice.reducer,
        userInfo : userInfoSlice.reducer
    }
})


export default store