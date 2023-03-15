import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../API';

export interface IFigure {
  last_modified_dt: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_num: string;
  set_url: string;
}

export interface IDetail {
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

const searchFigs = (response: IFigure[]) => {
  const arr = new Array<IFigure>(3);
  let i = 0;
  while (i < 3) {
    const index = Math.floor(Math.random() * response.length);
    const minifig = response[index];
    if (minifig.set_img_url) {
      response.splice(index, 1);
      arr.push(minifig);
      i += 1;
    }
  }
  return arr;
};

export const getData = createAsyncThunk<IFigure[]>('minifig/getItems', async () => {
  const response = await api.get('/minifigs/?page_size=363&in_theme_id=246');
  const data = searchFigs(response.data.results);
  return data;
});

export const getDetails = createAsyncThunk<IDetail[], string>(
  'minifig/getDetails',
  async (set_num) => {
    const response = await api.get(`/minifigs/${set_num}/parts`);
    const data: IDetail[] = response.data.results;
    return data;
  },
);

const figSlice = createSlice({
  name: 'minifig',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IFigure[]>) {
      state.items = [...state.items].concat(action.payload);
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
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.details = action.payload;
    });
  },
});

export const { addItem, setMinifig, setValid, clearCart } = figSlice.actions;
export default figSlice.reducer;
