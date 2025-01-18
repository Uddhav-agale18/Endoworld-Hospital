import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BACKEND_URL from '../../../backendApi';
const API_URL = `${BACKEND_URL}/api/female-fertility`; // Your backend API URL

// Define initial state
const initialState = {
  entries: [],
  loading: false,
  error: null,
};

// Create async thunks for CRUD operations
export const fetchEntries = createAsyncThunk(
  'femaleFertility/fetchEntries',
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

export const createEntry = createAsyncThunk(
  'femaleFertility/createEntry',
  async (newEntry) => {
    const response = await axios.post(API_URL, newEntry);
    return response.data.data;
  }
);

export const updateEntry = createAsyncThunk(
  'femaleFertility/updateEntry',
  async ({ id, updatedEntry }) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedEntry);
    return response.data.data;
  }
);

export const deleteEntry = createAsyncThunk(
  'femaleFertility/deleteEntry',
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

// Create the slice
const femaleFertilitySlice = createSlice({
  name: 'femaleFertility',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEntries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEntries.fulfilled, (state, action) => {
        state.loading = false;
        state.entries = action.payload;
      })
      .addCase(fetchEntries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createEntry.fulfilled, (state, action) => {
        state.entries.push(action.payload);
      })
      .addCase(updateEntry.fulfilled, (state, action) => {
        const index = state.entries.findIndex((entry) => entry._id === action.payload._id);
        if (index !== -1) {
          state.entries[index] = action.payload;
        }
      })
      .addCase(deleteEntry.fulfilled, (state, action) => {
        state.entries = state.entries.filter((entry) => entry._id !== action.payload);
      });
  },
});

export default femaleFertilitySlice.reducer;
