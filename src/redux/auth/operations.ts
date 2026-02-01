import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

// Типи користувача та відповіді
interface UserCredentials {
  name: string;
  email: string;
  password: string;
}

export interface UserResponse {
  token: string;
  refreshToken: string;
  email: string;
  name: string;
}

type RejectError = string;
axios.defaults.baseURL = "https://readjourney.b.goit.study/api";
const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

// ---------- REGISTER USER ----------
export const registerUser = createAsyncThunk<
  UserResponse, // тип повернення (fulfilled)
  UserCredentials, // тип аргументу (payload)
  { rejectValue: RejectError }
>("users/signup", async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post<UserResponse>(
      "/users/signup",
      credentials,
    );
    console.log(data);
    token.set(data.token);
    return data;
  } catch (e) {
    const error = e as AxiosError;
    return rejectWithValue(error.message);
  }
});

// ---------- LOGIN USER ----------
export const loginUser = createAsyncThunk<
  UserResponse, // fulfilled result type
  UserCredentials, // аргумент
  { rejectValue: RejectError }
>("users/signin", async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post<UserResponse>(
      "/users/signin",
      credentials,
    );
    token.set(data.token);
    return data;
  } catch (e) {
    const error = e as AxiosError;
    return rejectWithValue(error.message);
  }
});
