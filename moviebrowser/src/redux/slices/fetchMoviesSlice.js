import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetMovieList } from "../../services/Service";

// const PocketConnect = require("../../../sdk/connect").default;

// Action
export const fetchMovies = createAsyncThunk("fetchMovies", async () => {
  console.log("thunk");
  const getData = GetMovieList()
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      return err?.response?.data;
    });
  return getData;
});

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
      console.log("Error", action.payload);
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default fetchMoviesSlice.reducer;
