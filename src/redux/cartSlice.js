import { createSlice } from "@reduxjs/toolkit";

/*
State shape:
{
  items: {
    [id]: { id, name, price, img, quantity }
  },
  totalQuantity: number,
  totalPrice: number
}
*/

const initialState = {
  items: {},
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload; // { id, name, price, img, category }
      if (!state.items[item.id]) {
        state.items[item.id] = { ...item, quantity: 1 };
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },
    increaseQty: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += state.items[id].price;
      }
    },
    decreaseQty: (state, action) => {
      const id = action.payload;
      if (!state.items[id]) return;
      const price = state.items[id].price;
      if (state.items[id].quantity > 1) {
        state.items[id].quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= price;
      } else {
        // if quantity === 1, remove item completely
        state.totalQuantity -= 1;
        state.totalPrice -= price;
        delete state.items[id];
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.items[id];
      if (!item) return;
      state.totalQuantity -= item.quantity;
      state.totalPrice -= item.price * item.quantity;
      delete state.items[id];
    },
    clearCart: (state) => {
      state.items = {};
      state.totalQuantity = 0;
      state.totalPrice = 0;
    }
  },
});

export const { addToCart, increaseQty, decreaseQty, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
