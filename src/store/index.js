import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./slices/notes.slice.js";
import writeBoxSlice from "./slices/write-box.slice.js";

export const store = configureStore({
  reducer: {
    notes: notesSlice,
    writeBox: writeBoxSlice,
  },
});
