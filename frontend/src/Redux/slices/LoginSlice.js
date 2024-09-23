import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
  data: {},
};

// API
export const loginFn = createAsyncThunk(
  "login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/user/Login`, data);
      return response.data;
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data?.message || "An error occurred");
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

// Making slices
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    resetLogin: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(loginFn.pending, () => ({
      ...initialState,
      isLoading: true,
    }));

    builder.addCase(loginFn.fulfilled, (state, action) => ({
      ...initialState,
      isSuccess: true,
      data: action.payload,
    }));

    builder.addCase(loginFn.rejected, (state, action) => ({
      ...initialState,
      isError: true,
      errorMessage: action.payload,
    }));
  },
});

export const { resetLogin } = loginSlice.actions;
