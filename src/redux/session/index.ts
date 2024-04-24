import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SESSION } from '../constants';
import { initialState } from './state';
import { Session } from 'models/session_type';

export const sessionSlice = createSlice({
  name: SESSION,
  initialState,
  reducers: {
    getSessionData: (state, action: PayloadAction<number>) => {
      state.sessionId = action.payload;
    },
    setSessionData: (state, action: PayloadAction<Session>) => {
      state.session = action.payload;
    }, 
  },
});

export const { getSessionData , setSessionData } = sessionSlice.actions;

export default sessionSlice.reducer;
