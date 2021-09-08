import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  activeColorId: 0,
  colors: [],
};

const writeBoxSlice = createSlice({
  name: "write-box",
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    setActiveColorId: (state, action) => {
      state.activeColorId = action.payload;
    },
    setColors: (state, { payload }) => {
      if (Array.isArray(payload)) {
        state.activeColorId = payload[0].id;
        state.colors = payload.reduce((acc, item) => {
          acc[item.id] = item;
          return acc;
        }, {});
      }
    },
    reset: (state) => {
      state.text = "";
    },
  },
});

export const writeBoxSelector = createSelector(
  (state) => state.writeBox,
  (writeBox) => writeBox
);
export const colorsSelector = createSelector(
  (state) => state.writeBox.colors,
  (colors) => colors || []
);
export const activeColorSelector = createSelector(
  (state) => state.writeBox.activeColorId,
  (state) => state.writeBox.colors,
  (id, colors) => {
    return colors[id] || {};
  }
);

export const { setText, setActiveColorId, setColors, reset } =
  writeBoxSlice.actions;

export default writeBoxSlice.reducer;
