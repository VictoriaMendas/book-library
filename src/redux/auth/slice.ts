import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { loginUser, registerUser, type UserResponse } from "./operations";

export interface AuthUser {
  name: string;
  email: string;
}

export interface AuthState {
  user: AuthUser;
  isLoading: boolean;
  error: string | null;
  token: string | null;
  refreshToken: string | null;
}

// Тип payload при rejected
type RejectError = string | undefined;

// ---------------------- INITIAL STATE ----------------------

const initialState: AuthState = {
  user: { name: "", email: "" },
  isLoading: false,
  error: null,
  token: null,
  refreshToken: null,
};

// ---------------------- HANDLERS ----------------------

const handlePending = (state: AuthState) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (
  state: AuthState,
  action: PayloadAction<RejectError>,
) => {
  state.isLoading = false;
  state.error = action.payload ?? "Unknown error";
};

// ---------------------- SLICE ----------------------

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, handlePending)
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<UserResponse>) => {
          state.isLoading = false;
          state.error = null;
          state.user = {
            name: action.payload.name,
            email: action.payload.email,
          };
          state.token = action.payload.token;
          state.refreshToken = action.payload.refreshToken;
        },
      )

      .addCase(registerUser.rejected, handleRejected)
      .addCase(loginUser.pending, handlePending)
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<UserResponse>) => {
          state.isLoading = false;
          state.error = null;
          state.user = {
            name: action.payload.name,
            email: action.payload.email,
          };
          state.token = action.payload.token;
          state.refreshToken = action.payload.refreshToken;
        },
      )
      .addCase(loginUser.rejected, handleRejected);
  },
});

// ---------------------- EXPORT ----------------------

export const authReducer = authSlice.reducer;
