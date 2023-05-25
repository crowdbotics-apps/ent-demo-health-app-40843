import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const api_v1_callcenter_list = createAsyncThunk("callCenters/api_v1_callcenter_list", async payload => {
  const response = await apiService.api_v1_callcenter_list(payload);
  return response.data;
});
export const api_v1_callcenter_create = createAsyncThunk("callCenters/api_v1_callcenter_create", async payload => {
  const response = await apiService.api_v1_callcenter_create(payload);
  return response.data;
});
export const api_v1_callcenter_retrieve = createAsyncThunk("callCenters/api_v1_callcenter_retrieve", async payload => {
  const response = await apiService.api_v1_callcenter_retrieve(payload);
  return response.data;
});
export const api_v1_callcenter_update = createAsyncThunk("callCenters/api_v1_callcenter_update", async payload => {
  const response = await apiService.api_v1_callcenter_update(payload);
  return response.data;
});
export const api_v1_callcenter_partial_update = createAsyncThunk("callCenters/api_v1_callcenter_partial_update", async payload => {
  const response = await apiService.api_v1_callcenter_partial_update(payload);
  return response.data;
});
export const api_v1_callcenter_destroy = createAsyncThunk("callCenters/api_v1_callcenter_destroy", async payload => {
  const response = await apiService.api_v1_callcenter_destroy(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const callCentersSlice = createSlice({
  name: "callCenters",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_callcenter_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_callcenter_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [api_v1_callcenter_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_callcenter_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_callcenter_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [api_v1_callcenter_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_callcenter_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_callcenter_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [api_v1_callcenter_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_callcenter_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_callcenter_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    },
    [api_v1_callcenter_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_callcenter_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_callcenter_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    },
    [api_v1_callcenter_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_callcenter_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_callcenter_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(record => record.id !== action.meta.arg?.id);
        state.api.loading = "idle";
      }
    },
    [api_v1_callcenter_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  api_v1_callcenter_list,
  api_v1_callcenter_create,
  api_v1_callcenter_retrieve,
  api_v1_callcenter_update,
  api_v1_callcenter_partial_update,
  api_v1_callcenter_destroy,
  slice: callCentersSlice
};