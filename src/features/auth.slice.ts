/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
// libraries
import { createSlice } from '@reduxjs/toolkit';
import AuthService from 'services/auth.service';
// types
import { User } from 'interfaces/users.interface';

const initialState: User = {
  data: null,
  isLoading: false,
  isAuth: false,
  errors: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(AuthService.fetchAuth.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(AuthService.fetchAuth.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.data = action.payload;
    });
    builder.addCase(AuthService.fetchAuth.rejected, (state) => {
      state.isLoading = false;
      state.isAuth = false;
      state.data = null;
    });
    builder.addCase(AuthService.fetchSignUp.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(AuthService.fetchSignUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.data = action.payload;
    });
    builder.addCase(AuthService.fetchSignUp.rejected, (state) => {
      state.isLoading = false;
      state.isAuth = false;
      state.data = null;
    });
  }
});

export const authSelector = (state: any) => state.auth;

export default authSlice.reducer;
