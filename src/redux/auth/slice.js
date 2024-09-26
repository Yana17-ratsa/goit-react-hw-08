import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { login, register, logout } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,  
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, () => {
        return initialState;
      })
      .addMatcher(
        isAnyOf(register.pending, login.pending, logout.pending),
        (state) => {
          state.isLoading = true;
        }
      )

      .addMatcher(
        isAnyOf(register.rejected, login.pending, logout.pending),
        (state, action) => {
          state.isError = action.payload;
        }
      );
  },
});

export default slice.reducer;
