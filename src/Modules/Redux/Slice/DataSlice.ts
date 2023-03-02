import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IInformation {
  name: string;
  surname: string;
  phone: string;
  email: string;
  date: string;
  adress: string;
  city: string;
  state: string;
  zip: string;
}

interface IData {
  data: IInformation;
}

const initialState: IData = {
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
    setData(state, action: PayloadAction<IInformation>) {
      state.data = { ...action.payload };
    },
    clearData(state) {
      state.data = initialState.data;
    },
  },
});

export const { setData, clearData } = dataSlice.actions;
export default dataSlice.reducer;
