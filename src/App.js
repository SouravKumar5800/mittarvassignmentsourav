import { NotesGrid } from "./components/NotesGrid";
import { NotesMaker } from "./components/NotesMaker";
import { GenericTemplate } from "./template/generic";

function App() {
  return (
    <GenericTemplate>
      <div>
        <NotesGrid />
        <NotesMaker />
      </div>
    </GenericTemplate>
  );
}

export default App;
