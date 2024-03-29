import { createSlice, PayloadAction, ReducersMapObject } from '@reduxjs/toolkit';
import { AUTH_LOCALSTORAGE_KEY } from 'features/AuthByUsername';
import { User, UserSchema } from '../types/UserSchema';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(AUTH_LOCALSTORAGE_KEY);

      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(AUTH_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;
