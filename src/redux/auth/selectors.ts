// features/auth/selectors.ts
import type { RootState } from "../../redux/store";

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsLoggedIn = (state: RootState) => state.auth.user !== null;
export const selectAccessToken = (state: RootState) => state.auth.token;
export const selectRefreshToken = (state: RootState) => state.auth.refreshToken;

export const selectAuthError = (state: RootState) => state.auth.error;
