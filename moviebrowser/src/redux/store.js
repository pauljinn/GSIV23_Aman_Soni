import { configureStore } from "@reduxjs/toolkit";
import fetchMoviesReducer from "./slices/fetchMoviesSlice";

export const store = configureStore({
  reducer: {
    movieList: fetchMoviesReducer,
  },
});
