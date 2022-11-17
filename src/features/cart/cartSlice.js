import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      // Check if item already exists in cart
      const itemIndex = state.cartItems.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );
      let itemToAdd = state.cartItems[itemIndex];

      // Update quantity if item already exists || add item to cart
      if (itemToAdd) {
        state.cartItems[itemIndex] = { ...itemToAdd, qty: itemToAdd.qty + 1 };
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      } else {
        state.cartItems = [...state.cartItems, action.payload];
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    increaseProductQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        let product = state.cartItems[itemIndex];
        state.cartItems[itemIndex] = { ...product, qty: product.qty + 1 };
        state.cartItems = [...state.cartItems];
        localStorage.removeItem("cartItems");
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    decreaseProductQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        let product = state.cartItems[itemIndex];
        state.cartItems[itemIndex] = { ...product, qty: product.qty - 1 };
        state.cartItems = [...state.cartItems];
        localStorage.removeItem("cartItems");
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
  },
});

export default cartSlice.reducer;
export const {
  addtoCart,
  removeFromCart,
  increaseProductQuantity,
  decreaseProductQuantity,
} = cartSlice.actions;
