import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlise";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import teacherReducer from "./teachers/teacherSlise";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  userAuth: authReducer,
  getTeachers: teacherReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
