import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Header from "./Header";

describe("Header Component", () => {
  const initialState = {}; // Set store initial state.
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test("renders list header without errors", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    const homeButton = screen.getByTestId("home-button", { name: "Home" });
    expect(homeButton).toBeInTheDocument();

    const searchBar = screen.getByTestId("search-bar", { name: "Search" });
    expect(searchBar).toBeInTheDocument();
  });

  test("render movie detail header without error", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/details"]}>
        <Header />
      </MemoryRouter>
    );
    // Check if "Movie Details" is rendered when the route is /details
    const movieDetailsText = getByText("Movie Details");
    expect(movieDetailsText).toBeInTheDocument();
  });
});
