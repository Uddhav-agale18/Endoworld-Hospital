import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BACKEND_URL from '../../backendApi';
// Base URL for your API
const API_URL = `${BACKEND_URL}/api/home-serviceItems`;

// Fetch all services for the dropdown
export const fetchHomeServices = createAsyncThunk('homeServiceItems/fetchServices', async () => {
  const response = await axios.get(`${BACKEND_URL}/api/home-serviceItems/services`);
  return response.data; // Return the list of services
});

// Fetch all HomeServiceItems
export const fetchHomeServiceItems = createAsyncThunk('homeServiceItems/fetchHomeServiceItems', async () => {
  const response = await axios.get(API_URL);
  return response.data; // Return the list of HomeServiceItems
});

// Add a HomeServiceItem
export const addHomeServiceItem = createAsyncThunk('homeServiceItems/addHomeServiceItem', async (newItem) => {
  const response = await axios.post(API_URL, newItem);
  return response.data;
});

// Delete a HomeServiceItem
export const deleteHomeServiceItem = createAsyncThunk('homeServiceItems/deleteHomeServiceItem', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id; // Return the ID to remove it from the state
});

// Update a HomeServiceItem
export const updateHomeServiceItem = createAsyncThunk('homeServiceItems/updateHomeServiceItem', async (updatedItem) => {
  const response = await axios.put(`${API_URL}/${updatedItem._id}`, updatedItem);
  return response.data;
});

const homeServiceItemSlice = createSlice({
  name: 'homeServiceItems',
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
      .addCase(fetchHomeServices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHomeServices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.services = action.payload;
      })
      .addCase(fetchHomeServices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Fetch HomeServiceItems
      .addCase(fetchHomeServiceItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHomeServiceItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchHomeServiceItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Add HomeServiceItem
      .addCase(addHomeServiceItem.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      // Delete HomeServiceItem
      .addCase(deleteHomeServiceItem.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item._id !== action.payload);
      })
      // Update HomeServiceItem
      .addCase(updateHomeServiceItem.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item._id === action.payload._id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });
  },
});

export default homeServiceItemSlice.reducer;
