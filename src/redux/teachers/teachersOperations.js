import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get, limitToFirst, query, orderByKey } from "firebase/database";
import { database } from "../../config/firebase";

const teachersRef = ref(database, `teachers/`);

export const getTeachers = createAsyncThunk(
  "teachers/getTeachers",
  async (countOfCard, thunkAPI) => {
    try {
      let dataQuery = query(
        teachersRef,
        orderByKey(),
        limitToFirst(countOfCard)
      );
      const snapshot = await get(dataQuery);
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
