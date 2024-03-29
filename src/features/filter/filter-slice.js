import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
   name: '@@filter/',
   initialState: [],
   reducers: {
      addFilter: (state, action) => {
         if (!state.includes(action.payload)) {
            state.push(action.payload);
         }
      },
      removeFilter: (state, action) =>
         state.filter((item) => item !== action.payload),
      clearFilter: () => [],
   },
});

export const filterReducer = filterSlice.reducer;
export const { addFilter, removeFilter, clearFilter } = filterSlice.actions;

export const selectFilters = (state) => state.filters;
