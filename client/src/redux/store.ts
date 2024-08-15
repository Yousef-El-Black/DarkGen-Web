import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlicer";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

export default store;
