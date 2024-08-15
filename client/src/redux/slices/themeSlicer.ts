import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    dark: false,
  },
  reducers: {
    toggleTheme: (
      state: { dark: boolean },
      actions: { payload: { isThemeDark: boolean } }
    ) => {
      state.dark = actions.payload.isThemeDark;
    },
  },
});

export default themeSlice;

export const { toggleTheme } = themeSlice.actions;
