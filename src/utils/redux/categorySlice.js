import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: [],

  reducers: {
    add: (state, action) => {
      return state.concat(action.payload);
    },
    remove: (state, action) => {
      const newState = state.filter((result) => result.name !== action.payload);
      return newState;
    },
    edit: (state, action) => {
      const { id, name } = action.payload;
      const data = state.map((result) => {
        if (result.id === id) {
          return {
            id,
            name
          };
        } else {
          return {
            ...result
          };
        }
      });

      return data;
    }
  }
});

export const { add, edit, remove } = categorySlice.actions;

export const categoryData = (state) => state.category;

export default categorySlice.reducer;
