import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : {
      name: "",
      email: "",
      accessToken: "",
      role: "",
      media: "",
    };

const userInfoSlice = createSlice({
  name: "userInfo",
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      (state.email = action.payload.email),
        (state.media = action.payload.media),
        (state.accessToken = action.payload.accessToken);
      state.role = action.payload.role;

      localStorage.setItem("userInfo", JSON.stringify(state));
    },

    logout: (state) => {
      localStorage.removeItem("userInfo");
      state.name = "";
      state.email = "";
      state.media = "";
      state.accessToken = "";
      state.role = "";
    },
  },
  initialState,
});

export default userInfoSlice;
export const { setUser, logout } = userInfoSlice.actions;
