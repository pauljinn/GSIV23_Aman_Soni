import React, { useState } from "react";
import { AppBar, Toolbar, InputBase, IconButton } from "@mui/material";
import { FaHome, FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "./Header.css"; // Import your custom CSS for styling

function Header() {
  const location = useLocation();
  return (
    <AppBar position="static" className="app-bar">
      <Toolbar className="toolbar">
        {location.pathname.includes("list") ? (
          <SearchBar />
        ) : (
          <div className="detail">Movie Details</div>
        )}
        <IconButton edge="end" className="icon-button">
          <FaHome />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value); // Update state with entered text
  };
  return (
    <div className="search d-flex align-items-center">
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
      />
    </div>
  );
}

export default Header;
