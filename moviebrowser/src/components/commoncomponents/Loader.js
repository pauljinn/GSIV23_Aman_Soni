import React from "react";
import { CircularProgress } from "@mui/material";

function Loader() {
  return (
    <div
      className="loader-container d-flex justify-content-center align-items-center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <CircularProgress /> {/* CircularProgress as the loader */}
    </div>
  );
}

export default Loader;
