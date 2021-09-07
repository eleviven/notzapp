import { createSlice, createEntityAdapter, nanoid } from "@reduxjs/toolkit";

const notesAdapter = createEntityAdapter();
export const notesSelector = notesAdapter.getSelectors();

const initialState = notesAdapter.getInitialState();

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: {
      reducer: (state, action) => {
        notesAdapter.addOne(state, action);
      },
      prepare: (payload) => {
        return {
          payload: {
            ...payload,
            id: nanoid(),
            createdAt: new Date().toString(),
          },
        };
      },
    },
  },
});

export const { addNote } = notesSlice.actions;

export default notesSlice.reducer;
