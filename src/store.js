import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './features/filter/filter-slice';
import { positionReducer } from './features/positions/position-slice';

export const store = configureStore({
   reducer: {
      positions: positionReducer,
      filters: filterReducer,
   },
   devTools: true,
});
