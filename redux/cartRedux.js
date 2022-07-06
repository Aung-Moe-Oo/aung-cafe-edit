import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      const updateTotalAmount = action.payload.price * action.payload.quantity;

      const existingCartItemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.products[existingCartItemIndex];

      let updateItems;
      if (existingCartItem) {
        let updateItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + action.payload.quantity,
        };
        updateItems = [...state.products];
        updateItems[existingCartItemIndex] = updateItem;
      } else {
        updateItems = state.products.concat(action.payload);
      }

      state.products = updateItems;
      state.total = updateTotalAmount;
    },
    removeProduct: (state, action) => {
      state.quantity += 1;
      const updateTotalAmount = action.payload.price * action.payload.quantity;

      const existingCartItemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.products[existingCartItemIndex];

      let updateItems;
      if (existingCartItem) {
        let updateItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + action.payload.quantity,
        };
        updateItems = [...state.products];
        updateItems[existingCartItemIndex] = updateItem;
      } else {
        updateItems = state.products.concat(action.payload);
      }

      state.products = updateItems;
      state.total = updateTotalAmount;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
