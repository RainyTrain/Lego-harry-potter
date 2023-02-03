import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const figSlice = createSlice({
  name: 'minifig',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items = [...state.items].concat(action.payload);
    },
  },
});

export const { addItem } = figSlice.actions;
export default figSlice.reducer;
