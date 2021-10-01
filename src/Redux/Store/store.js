import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../reducers/home-reducer";
export default configureStore({
  reducer: {
    home: homeReducer,
  },
});
