import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import inputNameSliceReducer from './features/inputNameSlice';
import FormSliceReducer from './features/FormSlice';
import { api } from '../components/DATA/api';

export const store = configureStore({
  reducer: {
    inputName: inputNameSliceReducer,
    formCardList: FormSliceReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
