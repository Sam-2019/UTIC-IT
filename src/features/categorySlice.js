import { createSlice } from "@reduxjs/toolkit";
import { Category as Data } from "../Category/model";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    value: Data
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
      return state;
    },
    remove: (state, action) => {
      return state.value.filter((item) => item.id !== action.payload);
    },
    edit: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { add, edit, remove } = categorySlice.actions;

export const categoryData = (state) => state.category.value;

export default categorySlice.reducer;
