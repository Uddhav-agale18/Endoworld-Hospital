import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BACKEND_URL from '../../backendApi';
// Base API URL for your backend
const API_URL = `${BACKEND_URL}/api/blogs`;

// Async Thunks for CRUD operations
export const createBlog = createAsyncThunk(
  'blogs/createBlog',
  async (blogData, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/add`, blogData);
      return response.data.blog; // Return the blog object
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message || 'An error occurred');
    }
  }
);


export const getBlogs = createAsyncThunk(
  'blogs/getBlogs',
  async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data; // Return the list of blogs
    } catch (error) {
      throw Error('Failed to fetch blogs');
    }
  }
);

export const updateBlog = createAsyncThunk(
  'blogs/updateBlog',
  async ({ id, blogData }, thunkAPI) => {
    try {
      const response = await axios.put(`${API_URL}/edit/${id}`, blogData);
      return response.data.blog; // Return the updated blog
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

export const deleteBlog = createAsyncThunk(
  'blogs/deleteBlog',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${API_URL}/delete/${id}`);
      return id; // Return the blog ID that was deleted
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

// Blog slice
const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Create blog
    builder.addCase(createBlog.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs.push(action.payload);
    });
    builder.addCase(createBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Get blogs
    builder.addCase(getBlogs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
    });
    builder.addCase(getBlogs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Update blog
    builder.addCase(updateBlog.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateBlog.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.blogs.findIndex((blog) => blog._id === action.payload._id);
      if (index !== -1) {
        state.blogs[index] = action.payload; // Replace the updated blog
      }
    });
    builder.addCase(updateBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Delete blog
    builder.addCase(deleteBlog.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = state.blogs.filter((blog) => blog._id !== action.payload);
    });
    builder.addCase(deleteBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default blogSlice.reducer;
