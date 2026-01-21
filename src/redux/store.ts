import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  type PersistConfig,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist/es/constants";

import { authReducer } from "./auth/slice";
import type { AuthState } from "./auth/slice";

// ---------------------- PERSIST CONFIG ----------------------

const persistConfig: PersistConfig<AuthState> = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["token", "refreshToken", "auth"],
};

const persistedReducer = persistReducer<AuthState>(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// ---------------------- TYPES ----------------------

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// ---------------------- PERSISTOR ----------------------

export const persistor = persistStore(store);
