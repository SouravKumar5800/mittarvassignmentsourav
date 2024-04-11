import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { NotesViewer } from "../NotesViewer";
import { useSelector } from "react-redux";
import { deleteNote, selectNote } from "../../store/NoteSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import { useDispatch } from "react-redux";

export const NotesGrid = () => {
  const notes = useSelector(selectNote);
  const [sortedNotes, setSortedNotes] = useState([...notes]);
  const [currentNote, setCurrentNote] = useState("");
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [isAsc, setIsAsc] = useState(true);

  useEffect(() => {
    setSortedNotes((value) =>
      value.sort((a, b) => {
        const result = isAsc ? a.title > b.title : a.title < b.title;

        return result ? 1 : -1;
      })
    );
  }, [isAsc, notes]);

  useEffect(() => {
    setSortedNotes([...notes]);
  }, [notes]);

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          p: 2,
          display: "flex",
          gap: "1rem",
          position: "sticky",
          top: "4rem",
          background: "#F5EEE6",
          zIndex: "99",
        }}
      >
        <TextField
          label="Find Notes 🔎"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button onClick={() => setIsAsc((v) => !v)}>
          Sort By {isAsc ? <SouthIcon /> : <NorthIcon />}
        </Button>
      </Box>

      <Grid item xs={6}>
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr" },
            gap: 2,
          }}
        >
          {sortedNotes &&
            sortedNotes
              .filter((n) =>
                searchText
                  ? n.title.toLowerCase().includes(searchText.toLowerCase())
                  : true
              )
              .map((note) => (
                <>
                  <Paper
                    key={note.title}
                    elevation={2}
                    sx={{
                      padding: "1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    onClick={() => setCurrentNote(note.title)}
                  >
                    <Typography>{note.title}</Typography>
                    <Button
                      onClick={() => dispatch(deleteNote(note))}
                      color="error"
                    >
                      <DeleteIcon />
                    </Button>
                  </Paper>
                  {currentNote === note.title && (
                    <NotesViewer
                      data={note}
                      setCurrentNote={setCurrentNote}
                      currentNote={currentNote}
                    />
                  )}
                </>
              ))}
        </Box>
      </Grid>
    </Box>
  );
};
