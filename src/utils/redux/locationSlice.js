import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: "location",
  initialState: [],

  reducers: {
    add: (state, action) => {
      return state.concat(action.payload);
    },
    remove: (state, action) => {
      const newState = state.filter((result) => result.id !== action.payload);
      return newState;
    },

    edit: (state, action) => {
      const { id, name, address, coordinates, category } = action.payload;
      const data = state.map((result) => {
        if (result.id === id) {
          return {
            id,
            name,
            address,
            coordinates,
            category
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

export const { add, remove, edit } = locationSlice.actions;

export const locationData = (state) => state.location;

export default locationSlice.reducer;
