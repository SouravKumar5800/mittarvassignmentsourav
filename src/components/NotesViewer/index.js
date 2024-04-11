import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

export const NotesViewer = ({ data, currentNote, setCurrentNote }) => {
  return (
    <Modal
      sx={{ width: "50%" }}
      open={currentNote}
      onClose={() => setCurrentNote("")}
      aria-labelledby="Add Note modal"
      aria-describedby="create new notes"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {data.title}
        </Typography>
        <Box
          id="modal-modal-description"
          sx={{ mt: 2, overflow: "auto", maxHeight: "70vh" }}
          dangerouslySetInnerHTML={{ __html: data.value }}
        />
      </Box>
    </Modal>
  );
};
