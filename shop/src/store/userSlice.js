import { createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: { name: 'kim', age: 20 },
  reducers: {
    changeName(state) {
      state.name = 'park';
    },
    IncreaseAge(state, action) {
      state.age += action.payload;
    },
  },
});

export let { changeName, IncreaseAge } = user.actions;
export default user;
