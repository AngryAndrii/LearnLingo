import { createSlice } from "@reduxjs/toolkit";
import { getTeachers } from "./teachersOperations";

const initialState = {
  teachers: [],
  loading: false,
};

export const teacherSlice = createSlice({
  name: "getTeachers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTeachers.pending, (state, action) => {
        state.loading = true;
        state.teachers = action.payload;
      })
      .addCase(getTeachers.fulfilled, (state, action) => {
        state.loading = false;
        state.teachers = action.payload;
      })
      .addCase(getTeachers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

const { reducer: teacherReducer } = teacherSlice;
export default teacherReducer;
