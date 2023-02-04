import { configureStore } from '@reduxjs/toolkit';
import figReducer from '../Slice/FigSlice';
import dataReducer from '../Slice/DataSlice';

export const store = configureStore({
  reducer: { figReducer, dataReducer },
});
