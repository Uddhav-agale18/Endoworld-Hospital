import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BACKEND_URL from '../../backendApi';
// Thunks to interact with backend API
export const getSocialMediaLinks = createAsyncThunk(
  'socialMedia/getLinks',
  async () => {
    const response = await fetch(`${BACKEND_URL}/api/social-media`);
    const data = await response.json();
    return data;
  }
);

export const updateSocialMediaLinks = createAsyncThunk(
  'socialMedia/updateLinks',
  async (links) => {
    const response = await fetch(`${BACKEND_URL}/api/social-media`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(links),
    });
    const data = await response.json();
    return data;
  }
);

export const addSocialMediaLinks = createAsyncThunk(
  'socialMedia/addLinks',
  async (links) => {
    const response = await fetch(`${BACKEND_URL}/api/social-media`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(links),
    });
    const data = await response.json();
    return data;
  }
);

export const deleteSocialMediaLinks = createAsyncThunk(
  'socialMedia/deleteLinks',
  async () => {
    const response = await fetch(`${BACKEND_URL}/api/social-media`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  }
);

const socialMediaSlice = createSlice({
  name: 'socialMedia',
  initialState: {
    links: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get Social Media Links
      .addCase(getSocialMediaLinks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSocialMediaLinks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.links = action.payload;
      })
      .addCase(getSocialMediaLinks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Update Social Media Links
      .addCase(updateSocialMediaLinks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateSocialMediaLinks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.links = action.payload;
      })
      .addCase(updateSocialMediaLinks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Add Social Media Links
      .addCase(addSocialMediaLinks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addSocialMediaLinks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.links = action.payload;
      })
      .addCase(addSocialMediaLinks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Delete Social Media Links
      .addCase(deleteSocialMediaLinks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteSocialMediaLinks.fulfilled, (state) => {
        state.status = 'succeeded';
        state.links = null;
      })
      .addCase(deleteSocialMediaLinks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default socialMediaSlice.reducer;
