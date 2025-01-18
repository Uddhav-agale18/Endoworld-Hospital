import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BACKEND_URL from '../../backendApi';
// Base API URL
const API_URL = `${BACKEND_URL}/api/services`;

// Async Thunks
export const fetchServices = createAsyncThunk('services/fetchServices', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addService = createAsyncThunk('services/addService', async (service) => {
  const response = await axios.post(API_URL, service);
  console.log('Service added:', response.data);  // Log the response for debugging
  return response.data;
});

export const updateService = createAsyncThunk('services/updateService', async ({ id, name }) => {
  const response = await axios.put(`${API_URL}/${id}`, { name });
  return response.data;
});

export const deleteService = createAsyncThunk('services/deleteService', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// Slice
const serviceSlice = createSlice({
  name: 'services',
  initialState: {
    services: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.services = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchServices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      })
      .addCase(addService.fulfilled, (state, action) => {
        state.services.push(action.payload);
      })
      .addCase(updateService.fulfilled, (state, action) => {
        const index = state.services.findIndex((service) => service._id === action.payload._id);
        state.services[index] = action.payload;
      })
      .addCase(deleteService.fulfilled, (state, action) => {
        state.services = state.services.filter((service) => service._id !== action.payload);
      });
  },
});

export default serviceSlice.reducer;
