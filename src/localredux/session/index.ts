import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SESSION } from '../constants';
import { initialState } from './state';
import { GetSession, InputData, SessionSeverObject } from 'models/session_type';

export const sessionSlice = createSlice({
  name: SESSION,
  initialState,
  reducers: {
    getSessionData: (state, action: PayloadAction<GetSession>) => {
      state.sessionId = action.payload.sessionId;
    },
    setSessionData: (state, action: PayloadAction<SessionSeverObject>) => {
      state.session = action.payload;
    },
    setCardsData: (state, action: PayloadAction<InputData[]>) => {
      const oldInputs = state.user_inputs;
      state.user_inputs = [...oldInputs, ...action.payload];
    },
  },
});

export const { getSessionData, setSessionData, setCardsData } = sessionSlice.actions;

export default sessionSlice.reducer;
