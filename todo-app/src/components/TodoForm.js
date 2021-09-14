import React, { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid'

const TodoForm = ({ onSubmit }) => {
    const [input, setInput] = useState('')

    // the cursor will always focus on the current input field, enhance UX
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleSubmit = e => {
        e.preventDefault()
        onSubmit({
            id: nanoid(),
            text: input,
            isCompleted: false,
            isEdited: false
        })
        setInput('')
    }

    return (
        <form
            className='todo-form'
            onSubmit={e => handleSubmit(e)}
        >
            <input
                type="text"
                name='text'
                placeholder='Type your todo...'
                className='todo-input'
                value={input}
                onChange={e => setInput(e.target.value)}
                ref={inputRef}
            />
            <button className='submit-btn'>Add</button>
        </form>
    );
}

export default TodoForm;