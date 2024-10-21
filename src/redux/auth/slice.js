import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, logout, register } from "./operations";

export const refreshUserAsync = createAsyncThunk(
  "auth/refreshUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/refreshUser"); // Замініть на ваш API-запит
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not refresh user");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const sliceAuth = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, () => initialState)
      .addCase(refreshUserAsync.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserAsync.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(refreshUserAsync.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export default sliceAuth.reducer;
