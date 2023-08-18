import React from "react";
import ImageDescriptionCard from "./ImageDescriptionCard";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import {
  isImagePresent,
  isNullOrUndefined,
  isOverviewPresent,
} from "../utils/util";
import { IMAGE_BASE_URL } from "../constants/constant";

function List() {
  const movieList = useSelector((state) => state.movieList);

  console.log(movieList);
  return movieList.isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="d-flex mt-2 p-2">
      {/* <div>List</div> */}
      <Grid container spacing={3}>
        {movieList.data.map((page, index) => {
          return page.results.map((movie, index) => {
            if (isOverviewPresent(movie) && isImagePresent(movie)) {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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
        })}
      </Grid>
    </div>
  );
}

export default List;
