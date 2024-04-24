import { INITIAL_STATE } from "../contactsOps";
import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filtersSlice",
  initialState: INITIAL_STATE.filters,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
