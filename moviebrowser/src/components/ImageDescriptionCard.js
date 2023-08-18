import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ImageDescriptionCard({ imageUrl, description, title, rating }) {
  const navigate = useNavigate();
  return (
    <div className="cursor-pointer" onClick={() => navigate("/details")}>
      <Card sx={{ height: "300px" }}>
        <CardMedia component="img" height="200" image={imageUrl} alt="Image" />
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
              {title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {rating}
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
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default ImageDescriptionCard;
