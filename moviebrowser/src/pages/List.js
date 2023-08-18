import React, { useEffect } from "react";
import ImageDescriptionCard from "../components/commoncomponents/ImageDescriptionCard";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getImageUrl,
  isImagePresent,
  isNullOrUndefined,
  isOverviewPresent,
} from "../utils/util";
import { IMAGE_BASE_URL } from "../constants/constant";
import Loader from "../components/commoncomponents/Loader";
import { fetchMovies } from "../redux/slices/fetchMoviesSlice";

function List() {
  const movieList = useSelector((state) => state.movieList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return movieList.isLoading ? (
    <Loader />
  ) : movieList.data.length > 0 ? (
    <div className="d-flex mt-2 p-2">
      {/* <div>List</div> */}
      <Grid container spacing={3}>
        {/* If movies are present in first page */}
        {movieList.data[0].results.length > 0 ? (
          movieList.data.map((page, index) => {
            return page.results.map((movie, index) => {
              if (isOverviewPresent(movie) && isImagePresent(movie)) {
                let imageUrl = getImageUrl(movie);
                let modifiedMovie = { ...movie, imageUrl: imageUrl };
                return (
                  <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                    <ImageDescriptionCard movieDetail={modifiedMovie} />
                  </Grid>
                );
              }
            });
          })
        ) : (
          <EmptyState />
        )}
      </Grid>
    </div>
  ) : (
    <EmptyState />
  );
}

function EmptyState() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ width: "100vw", height: "80vh" }}
    >
      No movies found
    </div>
  );
}

export default List;
