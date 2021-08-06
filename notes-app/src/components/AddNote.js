import { useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";

const AddNote = ({ addNote, notes }) => {
    const [textValue, setTextValue] = useState("")
    const [style, setStyle] = useState("")
    const wordRemaining = 100

    const changeHandle = (e) => {
        if (wordRemaining - textValue.length > 0) {
            let text = e.target.value;
            setTextValue(text)
        }
    }

    const addHandle = () => {
        if (textValue.trim().length > 0) {
            addNote(textValue)
            setTextValue('')
        } else {
            setTextValue('Type something !!!')
            setStyle("warning")
            setTimeout(() => {
                setTextValue("")
                setStyle("neutral")
            }, 1000)
        }
    }

    return (
        <div>
            {notes.length === 0 &&
                <div style={{ width: 250 }} className="add-note">
                    <textarea
                        className={style}
                        onChange={changeHandle}
                        name="text"
                        value={textValue}
                        placeholder="Type your note">
                    </textarea>
                    <div className="note-footer">
                        <small>{wordRemaining - textValue.length} remaining</small>
                        <button onClick={addHandle}>
                            <RiAddCircleLine className="add" size="2.2em" />
                        </button>
                    </div>
                </div>
            }
            {notes.length !== 0 &&
                <div className="add-note">
                    <textarea
                        className={style}
                        onChange={changeHandle}
                        name="text"
                        value={textValue}
                        placeholder="Type your note">
                    </textarea>
                    <div className="note-footer">
                        <small>{wordRemaining - textValue.length} remaining</small>
                        <button onClick={addHandle}>
                            <RiAddCircleLine className="add" size="2.2em" />
                        </button>
                    </div>
                </div>
            }
        </div>


    );
}

export default AddNote;