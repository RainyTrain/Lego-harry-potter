import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    name: '',
    surname: '',
    phone: '',
    email: '',
    date: '',
    adress: '',
    city: '',
    state: '',
    zip: '',
  },
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = { ...action.payload };
    },
    clearData(state) {
      state.data = {
        name: '',
        surname: '',
        phone: '',
        email: '',
        date: '',
        adress: '',
        city: '',
        state: '',
        zip: '',
      };
    },
  },
});

export const { setData, clearData } = dataSlice.actions;
export default dataSlice.reducer;
