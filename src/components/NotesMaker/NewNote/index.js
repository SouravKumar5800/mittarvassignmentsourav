import "./index.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import RichTextEditor from "react-rte";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "100%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const NewNote = ({ setOpenModal, openModal, saveNote }) => {
  const [value, setValue] = useState(RichTextEditor.createEmptyValue());
  const [title, setTitle] = useState("");

  return (
    <Modal
      sx={{ width: "50%" }}
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="Add Note modal"
      aria-describedby="create new notes"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add new note
        </Typography>
        <Box
          id="modal-modal-description"
          sx={{ mt: 2, overflow: "auto", maxHeight: "70vh" }}
        >
          <TextField
            label="Title"
            variant="outlined"
            onChange={(val) => setTitle(val.target.value)}
            sx={{ my: 1, width: "100%" }}
          />
          <RichTextEditor value={value} onChange={setValue} />
        </Box>
        <button
          className="submit-note modal-modal-title"
          onClick={() => saveNote({ title, value: value.toString("html") })}
        >
          Save
        </button>
      </Box>
    </Modal>
  );
};
