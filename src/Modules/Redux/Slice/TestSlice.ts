import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  items: any[];
}

const initialState: IInitialState = {
  items: [],
};

export const getTestData = createAsyncThunk('test/Data', async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const response = await data.json();
  console.log('hi')
  return response;
});

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTestData.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default testSlice.reducer
