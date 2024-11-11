import { createSlice } from '@reduxjs/toolkit';

const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    usertoken: null,
    customer: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.customer = action.payload.customer;
      state.usertoken = action.payload.usertoken;
    },
    logout: (state) => {
      state.customer = null;
      state.usertoken = null;
    },
  },
});

export const { loginSuccess, logout } = customerSlice.actions;

export default customerSlice.reducer;
