import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  details: [],
  minifig: '',
  isFormValid: false,
};

const figSlice = createSlice({
  name: 'minifig',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items = [...state.items].concat(action.payload);
    },
    addDetail(state, action) {
      state.details = [...state.details].concat(action.payload);
    },
    setMinifig(state, action) {
      state.minifig = action.payload;
    },
    setValid(state, action) {
      state.isFormValid = action.payload;
    },
  },
});

export const { addItem, addDetail, setMinifig, setValid } = figSlice.actions;
export default figSlice.reducer;
