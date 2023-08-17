import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom"; // Import necessary components

import Layout from "../components/Layout";
import List from "../components/List";
import Details from "../components/Details";

// Testing Header route.
test("renders Header component when navigating to the layout route", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </MemoryRouter>
  );
  // Case insensitive strict checking
  const headerText = getByText(/header/i);
  expect(headerText).toBeInTheDocument();
});

// Testing List route.
test("renders List component when navigating to the list route", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/list"]}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/list" element={<List />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
  // Case insensitive strict checking
  const headerText = getByText(/header/i);
  // Case insensitive strict checking
  const listText = getByText(/list/i);
  expect(listText).toBeInTheDocument();
  expect(headerText).toBeInTheDocument();
});

// Testing Detail route.
test("renders Details component when navigating to the detail route", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/detail"]}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/detail" element={<Details />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
  // Case insensitive strict checking
  const headerText = getByText(/header/i);
  // Case insensitive strict checking
  const detailText = getByText(/details/i);
  expect(detailText).toBeInTheDocument();
  expect(headerText).toBeInTheDocument();
});
