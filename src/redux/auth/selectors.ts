// features/auth/selectors.ts
import type { RootState } from "../../redux/store";

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoginUser;
export const selectIsAuthLoading = (state: RootState) => state.auth.isLoading;
// export const selectIsRefreshing = useSelector(
//   (state) => state.auth.isRefreshing
// );
