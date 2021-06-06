import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: [
    {
      id: "1",
      name: "Bank"
    },
    {
      id: "2",
      name: "Hotel"
    },
    {
      id: "3",
      name: "Ministry"
    },
    {
      id: "4",
      name: "Health"
    }
  ],

  reducers: {
    add: (state, action) => {
      state.push({
        id: action.payload.id,
        name: action.payload.name
      });
      return state;
    },
    remove: (state, action) => {
      const newState = state.filter((result) => result.name !== action.payload);
      return newState;
    },
    edit: (state, action) => {
      console.log(action.payload);
    }
  }
});

export const { add, edit, remove } = categorySlice.actions;

export const categoryData = (state) => state.category;

export default categorySlice.reducer;
