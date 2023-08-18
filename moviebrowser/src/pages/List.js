import React from "react";
import ImageDescriptionCard from "../components/commoncomponents/ImageDescriptionCard";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import {
  isImagePresent,
  isNullOrUndefined,
  isOverviewPresent,
} from "../utils/util";
import { IMAGE_BASE_URL } from "../constants/constant";
import Loader from "../components/commoncomponents/Loader";

function List() {
  const movieList = useSelector((state) => state.movieList);
  // const movieListData = Array.isArray(movieList.data)
  //   ? movieList.data
  //   : movieList.data.results;

  console.log(movieList?.data?.[0]?.results);
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
                return (
                  <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                    <ImageDescriptionCard
                      title={movie.title}
                      rating={movie.vote_average}
                      description={movie.overview}
                      imageUrl={
                        IMAGE_BASE_URL +
                        (!isNullOrUndefined(movie.backdrop_path)
                          ? movie.backdrop_path
                          : movie.poster_path)
                      }
                    />
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
