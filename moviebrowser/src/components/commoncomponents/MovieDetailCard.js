import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getImageUrl, minutesToHHMM } from "../../utils/util";
import Loader from "./Loader";

const MovieDetailCard = () => {
  const movieDetails = useSelector((state) => state.movieDetail);
  const actors = movieDetails?.data?.credits?.cast?.filter(
    (cast) => cast?.known_for_department === "Acting"
  );

  const director = movieDetails?.data?.credits?.crew?.find(
    (crew) => crew?.job === "Director"
  );

  const castNames = actors?.map((actor) => actor.name).join(", ");

  return movieDetails?.isLoading ? (
    <Loader />
  ) : (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{
          width: "30%",
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
          padding: "4px",
          pt: 0,
        }}
      >
        <Typography variant="h6" component="div">
          <strong>{movieDetails.data.title}</strong>{" "}
          <span>({movieDetails.data.vote_average.toFixed(2)})</span>
        </Typography>

        <Typography variant="body2">
          {movieDetails.data.release_date} |{" "}
          {minutesToHHMM(movieDetails.data.runtime)} | {director?.name}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            maxHeight: "60px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            // Standardized approach using clamp
            display: "-webkit-box",
            WebkitLineClamp: 3, // Show up to 2 lines of text
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
            // Standardized approach using clamp
            display: "-webkit-box",
            WebkitLineClamp: 2, // Show up to 2 lines of text
            WebkitBoxOrient: "vertical",
            mt: 2,
          }}
        >
          <strong>Description:</strong> {movieDetails.data.overview}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieDetailCard;
