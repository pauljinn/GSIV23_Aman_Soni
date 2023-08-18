import React, { useState } from "react";
import { AppBar, Toolbar, InputBase, IconButton } from "@mui/material";
import { FaHome, FaSearch, FaTimes } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css"; // Import your custom CSS for styling
import { useDispatch } from "react-redux";
import { fetchMovies, searchMovie } from "../../redux/slices/fetchMoviesSlice";
import { isNullOrUndefined } from "../../utils/util";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <AppBar position="static" className="app-bar">
      <Toolbar className="toolbar">
        {location.pathname.includes("details") ? (
          <div className="detail" data-testid="movie-details">
            Movie Details
          </div>
        ) : (
          <SearchBar />
        )}
        <IconButton
          edge="end"
          className="icon-button"
          data-testid="home-button"
          onClick={() => navigate("/list")}
        >
          <FaHome />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    setSearchText(event.target.value); // Update state with entered text
    if (!isNullOrUndefined(event.target.value)) {
      dispatch(searchMovie(event.target.value));
    } else {
      dispatch(fetchMovies());
    }
  };

  const handleClearClick = () => {
    dispatch(fetchMovies());
    setSearchText("");
  };

  return (
    <div className="search d-flex align-items-center" data-testid="search-bar">
      <div className="search-icon ms-2">
        <FaSearch />
      </div>
      <InputBase
        placeholder="Search"
        classes={{ input: "input" }}
        inputProps={{ "aria-label": "search" }}
        value={searchText}
        onChange={handleSearchChange}
        fullWidth
        sx={{
          "::placeholder": {
            textAlign: "center", // Align the placeholder text to center
          },
          marginTop: "4px",
        }}
      />
      {searchText && (
        <IconButton
          onClick={handleClearClick}
          sx={{
            color: "#9b9b9b",
            width: "30px",
          }}
        >
          <FaTimes />
        </IconButton>
      )}
    </div>
  );
}

export default Header;
