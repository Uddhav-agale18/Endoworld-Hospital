import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BACKEND_URL from '../../backendApi';
// API Base URL for Doctor Staff
const API_URL = `${BACKEND_URL}/api/doctor-staff`;

// Thunks
export const fetchDoctorStaff = createAsyncThunk('doctorStaff/fetchDoctorStaff', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addDoctorStaff = createAsyncThunk('doctorStaff/addDoctorStaff', async (formData) => {
  const response = await axios.post(`${API_URL}/add`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
});

export const editDoctorStaff = createAsyncThunk('doctorStaff/editDoctorStaff', async ({ id, formData }) => {
  const response = await axios.put(`${API_URL}/edit/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
});

export const deleteDoctorStaff = createAsyncThunk('doctorStaff/deleteDoctorStaff', async (id) => {
  await axios.delete(`${API_URL}/delete/${id}`);
  return id;
});

// Slice
const doctorStaffSlice = createSlice({
  name: 'doctorStaff',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctorStaff.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(addDoctorStaff.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(editDoctorStaff.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => item._id === action.payload._id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteDoctorStaff.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item._id !== action.payload);
      });
  },
});

export default doctorStaffSlice.reducer;
