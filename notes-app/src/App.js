import NotesList from "./components/NotesList";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Navbar from "./components/Navbar";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Delete note in the top-right conner",
      date: "05/08/2021"
    },
    {
      id: nanoid(),
      text: "There is toggle button for dark mode",
      date: "05/08/2021"
    }
  ]);
  const [searchText, setSearchText] = useState("")
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem("react-notes-data"))
    // check when first load, no localStorage stored, so not setNotes
    if (saveNotes) {
      setNotes(saveNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      "react-notes-data",
      JSON.stringify(notes)
    )
  }, [notes])

  const searchTextHandle = (text) => {
    setSearchText(text)
  }

  const addNote = (text) => {
    const date = new Date();
    let newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className={darkMode && "dark-mode"}>
      <div className="container">
        <Navbar darkModeToggle={setDarkMode} />
        <Search searchTextHandle={searchTextHandle} />
        <NotesList
          notes={notes.filter(note => note.text.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))}
          addNote={addNote}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
