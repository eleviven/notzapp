import { configureStore } from "@reduxjs/toolkit";

import notesSlice from "./slices/notes.slice.js";
import writeBoxSlice from "./slices/write-box.slice.js";

import {
  getReduxStateFromStorage,
  setReduxStateToStorage,
} from "../services/store.service.js";

const preloadedState = getReduxStateFromStorage();

export const store = configureStore({
  reducer: {
    notes: notesSlice,
    writeBox: writeBoxSlice,
  },
  preloadedState,
});

store.subscribe(() => {
  setReduxStateToStorage(store.getState());
});
