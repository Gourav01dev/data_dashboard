import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTimeRange: 'month',
  compareMode: false,
  filters: {
    products: [],
    regions: [],
    channels: []
  }
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setTimeRange: (state, action) => {
      state.activeTimeRange = action.payload;
    },
    toggleCompareMode: (state) => {
      state.compareMode = !state.compareMode;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    }
  }
});

export const { setTimeRange, toggleCompareMode, setFilters } = dashboardSlice.actions;
export default dashboardSlice.reducer;
