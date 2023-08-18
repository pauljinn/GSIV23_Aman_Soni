import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/slices/fetchMoviesSlice";

function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    // dispatch(searchMovie("talk"));
    if (location.pathname === "/") {
      navigate("/list");
    }
  }, []);

  return (
    <div className="d-flex flex-column">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
