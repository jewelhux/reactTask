import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICard } from '../../components/utils/interfaces';

const initialState: ICard[] = [];

export const FormSlice = createSlice({
  name: 'formCardList',
  initialState,
  reducers: {
    addCardToList: (state, action: PayloadAction<ICard>) => {
      state.push(action.payload);
    },
  },
});

export const { addCardToList } = FormSlice.actions;

export default FormSlice.reducer;
