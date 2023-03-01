import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IFigure {
  last_modified_dt: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_num: string;
  set_url: string;
}

interface IDetail {
  color: any;
  element_id: string;
  id: number;
  inv_part_id: number;
  is_spare: boolean;
  num_sets: number;
  part: any;
  quantity: string;
  set_num: string;
}

interface IInitialState {
  items: IFigure[];
  details: IDetail[];
  minifig: IFigure;
  isFormValid: false | true;
}

const initialState: IInitialState = {
  items: [],
  details: [],
  minifig: {
    last_modified_dt: '',
    name: '',
    num_parts: 0,
    set_img_url: '',
    set_num: '',
    set_url: '',
  },
  isFormValid: false,
};

const figSlice = createSlice({
  name: 'minifig',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IFigure[]>) {
      state.items = [...state.items].concat(action.payload);
    },
    addDetail(state, action: PayloadAction<IDetail[]>) {
      state.details = [...state.details].concat(action.payload);
    },
    setMinifig(state, action: PayloadAction<IFigure>) {
      state.minifig = action.payload;
    },
    setValid(state, action: PayloadAction<boolean>) {
      state.isFormValid = action.payload;
    },
    clearCart(state) {
      state.items = initialState.items;
      state.details = initialState.details;
      state.minifig = initialState.minifig;
      state.isFormValid = initialState.isFormValid;
    },
  },
});

export const { addItem, addDetail, setMinifig, setValid, clearCart } = figSlice.actions;
export default figSlice.reducer;
