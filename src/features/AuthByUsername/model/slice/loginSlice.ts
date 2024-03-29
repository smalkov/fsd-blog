import { createSlice } from '@reduxjs/toolkit';
import { loginByUsername } from '../../model/services/loginByUsername';
import { LoginSchema } from '../../model/types/LoginSchema';
import { AUTH_LOCALSTORAGE_KEY } from '../../const/localStorage';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    authSubmit: (state) => {
      console.log('state', state.password);
      console.log('state2', state.username);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;

        localStorage.setItem(AUTH_LOCALSTORAGE_KEY, JSON.stringify(action.payload));
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: loginActions } = loginSlice;

export const { reducer: loginReducer } = loginSlice;
