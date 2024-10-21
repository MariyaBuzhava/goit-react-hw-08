import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuth = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "/register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      setAuth(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      setAuth(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    await axios.post("/users/logout");
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

// export const logout = createAsyncThunk(
//   "auth/logout",
//   async (_, { rejectWithValue }) => {
//     try {
//       localStorage.removeItem("token");
//       return;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const refreshUser = createAsyncThunk(
//   "auth/refresh",
//   async (_, { rejectWithValue, getState }) => {
//     const state = getState();
//     const token = localStorage.getItem("token");

//     if (!token) {
//       return rejectWithValue("No token found");
//     }

//     try {
//       const response = await fetch("/api/refreshUser", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to refresh user");
//       }

//       const data = await response.json();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
