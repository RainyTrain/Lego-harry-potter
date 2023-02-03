import { configureStore } from '@reduxjs/toolkit';
import figReducer from '../Slice/FigSlice'

export const store = configureStore({
  reducer: { figReducer },
});
