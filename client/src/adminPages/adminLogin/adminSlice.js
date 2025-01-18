import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BACKEND_URL from '../../backendApi';
// Base API URL for your backend
const API_URL = `${BACKEND_URL}/api/admin/login`;

export const loginAdmin = createAsyncThunk(
  'admin/loginAdmin',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post(API_URL, { email, password });
      localStorage.setItem('token', response.data.token); 
      return response.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    admin: null,
    token: localStorage.getItem('token') || null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.admin = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.admin = action.payload.admin;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = adminSlice.actions;
export default adminSlice.reducer;
