import React, { useEffect } from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/slices/fetchMoviesSlice";

function Layout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div className="d-flex flex-column">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
