import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  fetchMovieDetail,
  storeMovieDetail,
} from "../../redux/slices/movieDetailSlice";
import { useDispatch } from "react-redux";

function ImageDescriptionCard({ movieDetail }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function NavigateToDetailPage(movieDetail) {
    dispatch(fetchMovieDetail(movieDetail.id));
    navigate("/details");
  }

  return (
    <div
      className="cursor-pointer"
      onClick={() => NavigateToDetailPage(movieDetail)}
    >
      <Card sx={{ height: "300px" }}>
        <CardMedia
          component="img"
          height="200"
          image={movieDetail.imageUrl}
          alt="Image"
        />
        <CardContent>
          <div className="d-flex justify-content-between">
            <Typography
              variant="h6"
              color="textPrimary"
              sx={{
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 1, // Show up to 2 lines of text
                WebkitBoxOrient: "vertical",
              }}
            >
              {movieDetail.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {movieDetail.rating}
            </Typography>
          </div>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              maxHeight: "60px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              // Standardized approach using clamp
              display: "-webkit-box",
              WebkitLineClamp: 2, // Show up to 2 lines of text
              WebkitBoxOrient: "vertical",
              marginTop: "8px", // Adjust spacing between title/rating and description
            }}
          >
            {movieDetail.overview}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default ImageDescriptionCard;
