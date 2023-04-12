import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface inputNameState {
  value: string;
}

const initialState: inputNameState = {
  value: '',
};

export const inputNameSlice = createSlice({
  name: 'inputName',
  initialState,
  reducers: {
    inputNameWrite: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { inputNameWrite } = inputNameSlice.actions;

export default inputNameSlice.reducer;
