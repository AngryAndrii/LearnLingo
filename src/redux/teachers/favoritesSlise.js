import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  loading: false,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavotites(state, { payload }) {
      state.favorites.push(payload);
    },
    removeFromFavorites(state, { payload }) {
      state.favorites = state.favorites.filter((el) => el !== payload);
    },
  },
});

export const { addToFavotites, removeFromFavorites } = favoritesSlice.actions;
const favoritesReducer = favoritesSlice.reducer;
export default favoritesReducer;
