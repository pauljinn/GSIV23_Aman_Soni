import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Details from "../pages/Details";
import List from "../pages/List";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/details" element={<Details />} />
          <Route exact path="/list" element={<List />} />
        </Route>
        <Route exact path="/" element={<Layout />} />
        <Route path="*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
