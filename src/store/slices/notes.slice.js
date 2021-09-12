import {
  createSlice,
  createEntityAdapter,
  nanoid,
  createSelector,
} from "@reduxjs/toolkit";

const notesAdapter = createEntityAdapter({
  sortComparer: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
});
export const notesSelector = notesAdapter.getSelectors((state) => state.notes);

const initialState = notesAdapter.getInitialState({
  activeNoteId: null,
});

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
    updateNote: notesAdapter.updateOne,
    removeNote: notesAdapter.removeOne,
    setActiveNoteId: (state, action) => {
      state.activeNoteId = action.payload;
    },
  },
});

export const activeNoteSelector = createSelector(
  (state) => state.notes,
  ({ activeNoteId, entities }) => {
    if (activeNoteId in entities) {
      return entities[activeNoteId];
    }
    return null;
  }
);

export const { addNote, updateNote, removeNote, setActiveNoteId } =
  notesSlice.actions;

export default notesSlice.reducer;
