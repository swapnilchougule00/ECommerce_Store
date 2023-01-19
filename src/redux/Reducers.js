import { createReducer } from "@reduxjs/toolkit";

const cartReducer = createReducer(
  {
    cartItems: [],
    subtotal: 0,
    shipping: 0,
    tax: 0,
    Total: 0,
  },

  {
    addToCart: (state, action) => {
      console.log(action);
      const item = action.payload;
      const isExist = state.cartItems.find((i) => i.id === item.id);

      if (isExist) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) {
            i.quantity += 1;
          }
        });
      } else {
        state.cartItems.push(item);
      }
    },
    decrement: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item.quantity > 1) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) {
            i.quantity -= 1;
          }
        });
      }
    },

    remove: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },

    calculate: (state) => {
      let sum = 0;
      state.cartItems.forEach((i) => {
        sum += i.price * i.quantity;
        state.subtotal = sum;
        state.shipping = 10;
        state.tax = +(state.subtotal * 0.18).toFixed();
        state.Total = +(state.subtotal + state.shipping + state.tax).toFixed();
      });
    },
  }
);

export { cartReducer };
