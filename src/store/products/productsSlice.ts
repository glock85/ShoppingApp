import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { products } from "../../data/products";
import { Product } from "../../interfaces/interfaces";

interface ProductsState {
  products: Product[];
  cart: { product: Product; quantity: number }[];
  searchText: string;
  filteredProducts: Product[];
}
const initialState: ProductsState = {
  products: products.slice().sort((a, b) => a.name.localeCompare(b.name)),
  cart: [],
  searchText: "",
  filteredProducts: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const product = state.products.find(
        (product) => product.id === productId
      );
      if (product) {
        const cartItem = state.cart.find(
          (item) => item.product.id === productId
        );
        if (cartItem) {
          if (cartItem.quantity < 10) {
            cartItem.quantity++;
          }
        } else {
          state.cart.push({ product, quantity: 1 });
        }
      }
      state.cart = state.cart.filter((item) => item.quantity > 0);
    },
    resetProductsState: () => initialState,
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.cart = state.cart.filter((item) => item.product.id !== productId);
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
      state.products = products
        .filter((product) =>
          product.name.toLowerCase().includes(action.payload.toLowerCase())
        )
        .sort((a, b) => a.name.localeCompare(b.name));
    },
  },
});

export const { addToCart, removeFromCart, setSearchText, resetProductsState } =
  productsSlice.actions;

export default productsSlice.reducer;
