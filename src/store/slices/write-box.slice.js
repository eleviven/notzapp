import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  color: null,
};

const writeBoxSlice = createSlice({
  name: "write-box",
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    reset: (state) => {
      state.text = "";
      state.color = null;
    },
  },
});

export const writeBoxSelector = createSelector(
  (state) => state.writeBox,
  (writeBox) => writeBox
);

export const colorSelector = createSelector(
  (state) => state.writeBox.color,
  (color) => color
);

export const { setText, setColor, reset } = writeBoxSlice.actions;

export default writeBoxSlice.reducer;
