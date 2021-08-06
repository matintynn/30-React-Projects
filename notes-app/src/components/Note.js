import { RiDeleteBin5Line } from "react-icons/ri";

const Note = ({ id, text, date, deleteNote }) => {
    return (
        <div className="note-wrap">
            <div className="note">
                <div className="note-topFooter">
                    <small>{date}</small>
                    <RiDeleteBin5Line
                        className="delete-icon"
                        size="1.5em"
                        onClick={() => deleteNote(id)}
                    />
                </div>
                <div className="note-content">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default Note;