import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom"; // Import necessary components

import Layout from "../pages/Layout";
import List from "../pages/List";
import Details from "../pages/Details";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Routing Component", () => {
  const initialState = {
    movieDetail: { isLoading: true, data: null, isError: false },
    movieList: { isLoading: true, data: null, isError: false },
  }; // Set store initial state.

  const mockStore = configureStore([thunk]);
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  // Testing Various routes

  // Testing List route.
  test("renders List component when navigating to the list route", () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/list"]}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route exact path="/list" element={<List />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    // Case insensitive strict checking
    const headerText = getByPlaceholderText(/search/i);
    expect(headerText).toBeInTheDocument();
  });

  // Testing Detail route.
  test("renders Details component when navigating to the detail route", () => {
    const { getByText, queryAllByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/details"]}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route exact path="/details" element={<Details />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    // Case insensitive strict checking
    const headerText = getByText(/movie details/i);
    expect(headerText).toBeInTheDocument();
  });
});
