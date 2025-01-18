import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BACKEND_URL from '../../backendApi';
// Base API URL
const API_URL = `${BACKEND_URL}/api/home-services`;

// Async Thunks
export const fetchHomeServices = createAsyncThunk('homeServices/fetchHomeServices', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addHomeService = createAsyncThunk('homeServices/addHomeService', async (service) => {
  const response = await axios.post(API_URL, service);
  console.log('Service added:', response.data); // Log the response for debugging
  return response.data;
});

export const updateHomeService = createAsyncThunk('homeServices/updateHomeService', async ({ id, name }) => {
  const response = await axios.put(`${API_URL}/${id}`, { name });
  return response.data;
});

export const deleteHomeService = createAsyncThunk('homeServices/deleteHomeService', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// Slice
const homeServiceSlice = createSlice({
  name: 'homeServices',
  initialState: {
    homeServices: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeServices.fulfilled, (state, action) => {
        state.homeServices = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchHomeServices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHomeServices.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      })
      .addCase(addHomeService.fulfilled, (state, action) => {
        state.homeServices.push(action.payload);
      })
      .addCase(updateHomeService.fulfilled, (state, action) => {
        const index = state.homeServices.findIndex(
          (service) => service._id === action.payload._id
        );
        state.homeServices[index] = action.payload;
      })
      .addCase(deleteHomeService.fulfilled, (state, action) => {
        state.homeServices = state.homeServices.filter(
          (service) => service._id !== action.payload
        );
      });
  },
});

export default homeServiceSlice.reducer;
