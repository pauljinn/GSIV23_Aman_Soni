import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getUpcomingMovieListApi,
  searchMovieApi,
} from "../../services/Service";

// const PocketConnect = require("../../../sdk/connect").default;

// Action
export const fetchMovies = createAsyncThunk("fetchMovies", async () => {
  const getData = getUpcomingMovieListApi()
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err?.response?.data;
    });
  return getData;
});

export const searchMovie = createAsyncThunk(
  "searchMovie",
  async (searchText) => {
    const getData = searchMovieApi(searchText)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err?.response?.data;
      });
    return getData;
  }
);

//Reducer
const fetchMoviesSlice = createSlice({
  name: "fetchMovies",
  initialState: {
    isLoading: true,
    data: null,
    isError: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action?.payload?.errors && action.payload.errors.length !== 0) {
        action.payload.errors.map((err) => console.error(err));
      } else {
        state.data = action.payload;
      }
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      console.error("Error", action.payload);
      state.isError = true;
      state.isLoading = false;
    });

    builder.addCase(searchMovie.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(searchMovie.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action?.payload?.errors && action.payload.errors.length !== 0) {
        action.payload.errors.map((err) => console.error(err));
      } else {
        // Fetching only one page i.e putting at index 0.
        state.data = [action.payload];
      }
    });
    builder.addCase(searchMovie.rejected, (state, action) => {
      console.error("Error", action.payload);
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default fetchMoviesSlice.reducer;
