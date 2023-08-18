import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMovieDetailApi } from "../../services/Service";

// Action
export const fetchMovieDetail = createAsyncThunk(
  "fetchMovies",
  async (movieId) => {
    const getData = fetchMovieDetailApi(movieId)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err?.response?.data;
      });
    return getData;
  }
);

const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState: { data: null },

  extraReducers: (builder) => {
    builder.addCase(fetchMovieDetail.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovieDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action?.payload?.errors && action.payload.errors.length !== 0) {
        action.payload.errors.map((err) => console.error(err));
      } else {
        state.data = action.payload;
      }
    });
    builder.addCase(fetchMovieDetail.rejected, (state, action) => {
      console.error("Error", action.payload);
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default movieDetailSlice.reducer;
export const { storeMovieDetail } = movieDetailSlice.actions;
