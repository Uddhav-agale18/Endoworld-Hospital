import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BACKEND_URL from '../../backendApi';
// Base URL for your API
const API_URL = `${BACKEND_URL}/api/serviceItems`;

// Fetch all services for the dropdown
export const fetchServices = createAsyncThunk('services/fetchServices', async () => {
  const response = await axios.get(`${BACKEND_URL}/api/serviceItems/services`);
  return response.data; // Return the list of services
});

// Fetch all service items
export const fetchServiceItems = createAsyncThunk('serviceItems/fetchServiceItems', async () => {
  const response = await axios.get(API_URL);
  return response.data; // Return the list of service items
});

// Add a service item
export const addServiceItem = createAsyncThunk('serviceItems/addServiceItem', async (newItem) => {
  const response = await axios.post(API_URL, newItem);
  return response.data;
});

// Delete a service item
export const deleteServiceItem = createAsyncThunk('serviceItems/deleteServiceItem', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id; // Return the ID to remove it from the state
});

// Update a service item
export const updateServiceItem = createAsyncThunk('serviceItems/updateServiceItem', async (updatedItem) => {
  const response = await axios.put(`${API_URL}/${updatedItem._id}`, updatedItem);
  return response.data;
});

const serviceItemSlice = createSlice({
  name: 'serviceItems',
  initialState: {
    services: [],
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch services
      .addCase(fetchServices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.services = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Fetch service items
      .addCase(fetchServiceItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchServiceItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchServiceItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Add service item
      .addCase(addServiceItem.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      // Delete service item
      .addCase(deleteServiceItem.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item._id !== action.payload);
      })
      // Update service item
      .addCase(updateServiceItem.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item._id === action.payload._id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });
  },
});

export default serviceItemSlice.reducer;
