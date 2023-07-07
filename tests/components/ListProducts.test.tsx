/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from "react";
import {
  fireEvent,
  queryAllByTestId,
  render,
  waitFor,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../src/store";
import { BrowserRouter } from "react-router-dom";
import Shopping from "../../src/Shopping";
import "@testing-library/jest-dom/extend-expect";

describe("ListProducts", () => {
  const setup = () => {
    return render(
      <Provider store={{ ...store }}>
        <BrowserRouter>
          <Shopping />
        </BrowserRouter>
      </Provider>
    );
  };

  it("renders 6 products correctly ordered alphabetically", () => {
    const { getAllByTestId } = setup();

    const productCards = getAllByTestId("product-card");

    expect(productCards.length).toBe(6);

    const productNames = productCards.map(
      (card) => card.querySelector("h5")?.textContent
    );
    const sortedNames = [...productNames].sort();

    expect(productNames).toEqual(sortedNames);
  });

  it("should be updated badge counter when click on a addToCartButton", () => {
    const { getAllByTestId, getByTestId } = setup();

    const buttonAddToCart = getAllByTestId("buttonAddToCart");

    fireEvent.click(buttonAddToCart[1]);

    const badge = getByTestId("cart-badge").closest("span");

    expect(badge?.textContent).toBe("1");
  });

  it("should not update badge counter when clicking on a disabled addToCartButton", () => {
    store.dispatch({ type: "products/resetProductsState" });

    const { getAllByTestId, getByTestId } = setup();

    const buttonAddToCart = getAllByTestId("buttonAddToCart");

    fireEvent.click(buttonAddToCart[0]);

    const badge = getByTestId("cart-badge").closest("span");

    expect(badge?.textContent).toBe("");
  });

  it("should reset state when clicking on clean cart button", () => {
    const { getAllByTestId, getByTestId } = setup();

    const buttonAddToCart = getAllByTestId("buttonAddToCart");
    fireEvent.click(buttonAddToCart[1]);

    const cartButton = getByTestId("cart-button");
    fireEvent.click(cartButton);

    const buttonResetCart = getByTestId("reset-button");
    fireEvent.click(buttonResetCart);

    const state = store.getState();
    const cart = state.products.cart;

    expect(cart.length).toBe(0);
  });

  it("should be removed a product from cart when clicking on remove button", () => {
    const { getAllByTestId, getByTestId } = setup();

    const buttonAddToCart = getAllByTestId("buttonAddToCart");
    fireEvent.click(buttonAddToCart[1]);
    fireEvent.click(buttonAddToCart[5]);

    const cartButton = getByTestId("cart-button");
    fireEvent.click(cartButton);

    const buttonRemoveFromCart = getAllByTestId("remove-from-cart-button");
    fireEvent.click(buttonRemoveFromCart[0]);

    const state = store.getState();
    const cart = state.products.cart;

    expect(cart.length).toBe(1);
  });

  it("should search a product when typing on search input", async () => {
    const { getByTestId } = setup();

    const searchInput = getByTestId("search-input");

    fireEvent.change(searchInput, { target: { value: "P" } });

    await waitFor(() => {
      const productCards = queryAllByTestId(document.body, "product-card");
      return productCards.length > 0;
    });

    const productCards = queryAllByTestId(document.body, "product-card");
    expect(productCards.length).toBeGreaterThan(0);
    expect(productCards[0]).toBeInTheDocument();
  });
});
