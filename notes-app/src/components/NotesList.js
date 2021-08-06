import AddNote from "./AddNote"
import Note from "./Note"

const NotesList = ({ notes, addNote, deleteNote }) => {
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    deleteNote={deleteNote}
                />
            ))}
            <AddNote
                addNote={addNote}
                notes={notes}
            />
        </div>
    );
}

export default NotesList;