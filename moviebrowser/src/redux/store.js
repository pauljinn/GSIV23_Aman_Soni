import { configureStore } from "@reduxjs/toolkit";
import fetchMoviesReducer from "./slices/fetchMoviesSlice";
import movieDetailReducer from "./slices/movieDetailSlice";

export const store = configureStore({
  reducer: {
    movieList: fetchMoviesReducer,
    movieDetail: movieDetailReducer,
  },
});
