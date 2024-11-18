import { createSlice } from '@reduxjs/toolkit';

const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    customer: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.customer = action.payload.customer;
    },
    logout: (state) => {
      state.customer = null;
    },
  },
});

export const { loginSuccess, logout } = customerSlice.actions;

export default customerSlice.reducer;
