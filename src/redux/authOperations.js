import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth } from '../config/firebase';

export const registerUser = createAsyncThunk(
  'userAuth/registerUser',
  async (body, thunkAPI) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        body.email,
        body.password,
        body.name
      );
      await updateProfile(auth.currentUser, { displayName: body.name });

      const { uid, displayName, email } = auth.currentUser;

      return { uid, displayName, email };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// const loginuser = createAsyncThunk(
//   'userAuth/login',
//   async (userId, thunkAPI) => {
//     const response = await userAPI.fetchById(userId);
//     return response.data;
//   }
// );

// const logOutUser = createAsyncThunk(
//   'userAuth/logout',
//   async (userId, thunkAPI) => {
//     const response = await userAPI.fetchById(userId);
//     return response.data;
//   }
// );

// dispatch(fetchUserById(123));
