import { createSlice } from "@reduxjs/toolkit";
import { Location as Data } from "../Location/model";

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    value: Data
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
      return state;
    },
    remove: (state, action) => {
      state.value.filter((item) => item.id !== action.payload);
      return state;
    },
    edit: (state, action) => {
      return state.map((location) => {
        if (location.id === action.payload.id) {
          return {
            ...location,
            item: action.payload.item
          };
        }
        return location;
      });
    }
  }
});

export const { add, remove, edit } = locationSlice.actions;

export const locationData = (state) => state.location.value;

export default locationSlice.reducer;
