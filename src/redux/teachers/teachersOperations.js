import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ref,
  get,
  child,
  limitToFirst,
  limitToLast,
  startAt,
} from "firebase/database";
import { database } from "../../config/firebase";

const teachersRef = ref(database, `teachers/`);

export const getTeachers = createAsyncThunk(
  "teachers/getTeachers",
  async (_, thunkAPI) => {
    try {
      const snapshot = await get(teachersRef);
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

// export const doFoo = () => {
//   get(child(teachersRef, `teachers/`))
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         console.log(snapshot.val());
//       } else {
//         console.log("No data available");
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };
