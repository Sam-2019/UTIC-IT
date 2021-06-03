import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./redux_utils/categorySlice";
import locationReducer from "./redux_utils/locationSlice";

export default configureStore({
  reducer: {
    category: categoryReducer,
    location: locationReducer
  }
});
