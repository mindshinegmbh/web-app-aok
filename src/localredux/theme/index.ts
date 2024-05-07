import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { THEME } from '../constants';
import { initialState } from './state';

export const themeSlice = createSlice({
  name: THEME,
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    setFont: (state, action: PayloadAction<string>) => {
      state.font = action.payload;
    }, 
  },
});

export const { setTheme , setFont } = themeSlice.actions;

export default themeSlice.reducer;
