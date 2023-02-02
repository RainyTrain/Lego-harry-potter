import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const figSlice = createSlice({
  name: 'minifig',
  initialState,
  reducers: {
    addItem(state, action) {
      action.payload.map((item) => state.items.push({ ...item }));
    },
  },
});

export const {addItem} = figSlice.actions
export default figSlice.reducer
