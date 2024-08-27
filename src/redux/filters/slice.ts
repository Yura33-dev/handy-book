import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterState } from './types/filtersTypes';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: { value: '' },
  reducers: {
    changeFilter(state: IFilterState, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
