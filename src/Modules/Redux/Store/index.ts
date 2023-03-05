import { configureStore } from '@reduxjs/toolkit';
import figReducer from '../Slice/FigSlice';
import dataReducer from '../Slice/DataSlice';
import testReducer from '../Slice/TestSlice';

export const store = configureStore({
  reducer: { figReducer, dataReducer, testReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
