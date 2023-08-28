import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import drugService from "./drugService";

const initialState = {
  drugs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ""
};

export const getDrugs = createAsyncThunk(
  "drugs/getAll",
  async (_, thunkAPI) => {
    try {
      return await drugService.getDrugs();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const drugSlice = createSlice({
  name: "drug",
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDrugs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDrugs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.drugs = action.payload;
      })
      .addCase(getDrugs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export const { reset } = drugSlice.actions;
export default drugSlice.reducer;
