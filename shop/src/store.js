import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './store/userSlice.js';

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    changeCount(state, action) {
      // id와 동일한 id가진 상품 수량을 +1
      let number = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[number].count++;
    },
  },
});

export let { changeCount } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
