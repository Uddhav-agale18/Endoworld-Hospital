import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BACKEND_URL from '../../backendApi';
// Base API URL
const API_URL = `${BACKEND_URL}/api/maps`;

// Thunks
export const fetchMap = createAsyncThunk('map/fetchMap', async (_, thunkAPI) => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const addMap = createAsyncThunk('map/addMap', async (link, thunkAPI) => {
  try {
    const response = await axios.post(API_URL, { link });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const updateMap = createAsyncThunk('map/updateMap', async (link, thunkAPI) => {
  try {
    const response = await axios.put(API_URL, { link });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const deleteMap = createAsyncThunk('map/deleteMap', async (_, thunkAPI) => {
  try {
    await axios.delete(API_URL);
    return true;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Slice
const mapSlice = createSlice({
  name: 'map',
  initialState: {
    map: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Map
      .addCase(fetchMap.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMap.fulfilled, (state, action) => {
        state.loading = false;
        state.map = action.payload;
      })
      .addCase(fetchMap.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Add Map
      .addCase(addMap.fulfilled, (state, action) => {
        state.map = action.payload.map;
      })
      // Update Map
      .addCase(updateMap.fulfilled, (state, action) => {
        state.map = action.payload.map;
      })
      // Delete Map
      .addCase(deleteMap.fulfilled, (state) => {
        state.map = null;
      });
  },
});

export default mapSlice.reducer;
