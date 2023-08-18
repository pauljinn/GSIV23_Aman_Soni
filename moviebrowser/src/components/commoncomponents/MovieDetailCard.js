import React, { useEffect } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getImageUrl,
  isNullOrUndefined,
  minutesToHHMM,
} from "../../utils/util";
import Loader from "./Loader";
import { useSearchParams } from "react-router-dom";
import { fetchMovieDetail } from "../../redux/slices/movieDetailSlice";

const MovieDetailCard = () => {
  const movieDetails = useSelector((state) => state.movieDetail);
  const [searchParams, setSearchParams] = useSearchParams();
  const actors = movieDetails?.data?.credits?.cast?.filter(
    (cast) => cast?.known_for_department === "Acting"
  );

  const director = movieDetails?.data?.credits?.crew?.find(
    (crew) => crew?.job === "Director"
  );

  const castNames = actors?.map((actor) => actor.name).join(", ");
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchParams.get("id")) {
      dispatch(fetchMovieDetail(searchParams.get("id")));
    }
  }, []);

  return movieDetails?.isLoading ? (
    <Loader />
  ) : (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{
          width: "20%",
          maxHeight: "100%",
          objectFit: "cover",
        }}
        image={getImageUrl(movieDetails?.data)}
        alt="Movie Poster"
      />
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "5px",
          pt: 0,
          pl: 2,
        }}
      >
        <Typography variant="h6" component="div">
          <strong>{movieDetails?.data?.title}</strong>{" "}
          <span>({movieDetails?.data?.vote_average?.toFixed(2)})</span>
        </Typography>

        <Typography variant="body2">
          {movieDetails?.data?.release_date} |{" "}
          {minutesToHHMM(movieDetails?.data?.runtime)} | {director?.name}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            maxHeight: "60px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            mt: 2,
          }}
        >
          <strong>Cast:</strong> {castNames}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            maxHeight: "60px",
            overflow: "hidden",
            textOverflow: "ellipsis",

            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            mt: 2,
          }}
        >
          <strong>Description:</strong> {movieDetails?.data?.overview}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieDetailCard;
