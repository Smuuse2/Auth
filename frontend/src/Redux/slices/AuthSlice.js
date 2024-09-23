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
export const signIn = createAsyncThunk(
  "signIn",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/user/Create`, data);
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
export const signUpSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    resetSignIn: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, () => ({
      ...initialState,
      isLoading: true,
    }));

    builder.addCase(signIn.fulfilled, (state, action) => ({
      ...initialState,
      isSuccess: true,
      data: action.payload,
    }));

    builder.addCase(signIn.rejected, (state, action) => ({
      ...initialState,
      isError: true,
      errorMessage: action.payload,
    }));
  },
});

export const { resetSignIn } = signUpSlice.actions;
export default signUpSlice.reducer;
