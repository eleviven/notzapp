import { createSlice, createEntityAdapter, nanoid } from "@reduxjs/toolkit";

const notesAdapter = createEntityAdapter({
  sortComparer: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
});
export const notesSelector = notesAdapter.getSelectors((state) => state.notes);

const initialState = notesAdapter.getInitialState();

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: {
      reducer: (state, action) => {
        notesAdapter.addOne(state, action);
      },
      prepare: (payload) => ({
        payload: {
          id: nanoid(),
          createdAt: new Date().toString(),
          ...payload,
        },
      }),
    },
    removeNote: notesAdapter.removeOne,
  },
});

export const { addNote, removeNote } = notesSlice.actions;

export default notesSlice.reducer;
