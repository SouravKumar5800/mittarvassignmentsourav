import { useState } from "react";
import { useDispatch } from "react-redux";
import { NewNote } from "./NewNote";
import "./index.css";
import { addNote } from "../../store/NoteSlice";

export const NotesMaker = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const saveNote = (data) => {
    dispatch(addNote(data));
    setOpenModal(false);
  };

  return (
    <div className="note-maker">
      <button className="add-note-btn" onClick={() => setOpenModal(true)}>
        +
      </button>
      {openModal && (
        <NewNote
          openModal={openModal}
          setOpenModal={setOpenModal}
          saveNote={saveNote}
        />
      )}
    </div>
  );
};
