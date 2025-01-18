import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BACKEND_URL from '../../../backendApi';
const API_URL = `${BACKEND_URL}/api/male-fertility`; // Replace with your actual API URL

// Async Thunks
export const fetchAllMaleFertility = createAsyncThunk(
  'maleFertility/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const createMaleFertility = createAsyncThunk(
  'maleFertility/create',
  async (newRecord, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, newRecord);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateMaleFertility = createAsyncThunk(
  'maleFertility/update',
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteMaleFertility = createAsyncThunk(
  'maleFertility/delete',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Slice
const maleFertilitySlice = createSlice({
  name: 'maleFertility',
  initialState: {
    records: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch All
      .addCase(fetchAllMaleFertility.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllMaleFertility.fulfilled, (state, action) => {
        state.loading = false;
        state.records = action.payload;
      })
      .addCase(fetchAllMaleFertility.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Create
      .addCase(createMaleFertility.fulfilled, (state, action) => {
        state.records.push(action.payload);
      })
      // Update
      .addCase(updateMaleFertility.fulfilled, (state, action) => {
        const index = state.records.findIndex((record) => record._id === action.payload._id);
        if (index !== -1) state.records[index] = action.payload;
      })
      // Delete
      .addCase(deleteMaleFertility.fulfilled, (state, action) => {
        state.records = state.records.filter((record) => record._id !== action.payload);
      });
  },
});

export default maleFertilitySlice.reducer;
