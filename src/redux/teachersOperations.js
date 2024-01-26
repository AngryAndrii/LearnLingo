import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";

export const teachers = createAsyncThunk(
  "teachers/getTeachers",
  async (_, thunkAPI) => {
    try {
      const teachers = await 


      return 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
