import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authOperations";

const initialState = {
  user: {
    name: null,
    email: null,
    uid: null,
  },
  isLoggedIn: false,
  loading: false,
};

export const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.displayName;
        state.user.uid = action.payload.uid;
        state.isLoggedIn = true;
        state.loading = false;
      })

      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

const { reducer: authReducer } = authSlice;
export default authReducer;
