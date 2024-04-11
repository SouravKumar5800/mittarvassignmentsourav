import { createSlice } from "@reduxjs/toolkit";

export const ACTIONS = {
  ADD_NOTE: "add note",
  DELETE_NOTE: "delete note",
};

const NoteSlice = createSlice({
  name: "notes",
  initialState: {
    value: JSON.parse(localStorage.getItem("yn-notes")) || [],
  },
  reducers: {
    addNote: (state, action) => {
      state.value = [...state.value, action.payload];
      localStorage.setItem("yn-notes", JSON.stringify(state.value));
    },
    deleteNote: (state, action) => {
      state.value = state.value.filter((n) => n.title !== action.payload.title);
      localStorage.setItem("yn-notes", JSON.stringify(state.value));
    },
  },
});

export const { addNote, deleteNote } = NoteSlice.actions;

export const selectNote = (state) => state.notes.value;

export default NoteSlice.reducer;
