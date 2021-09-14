import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import { RiEditCircleFill, RiCheckboxBlankCircleFill, RiCheckboxCircleFill, RiCloseCircleFill } from 'react-icons/ri'

const Todo = ({ todos, completeTodo, undoCompleteTodo, removeTodo, editTodo, submitEditTodo, flag }) => {
    const [edit, setEdit] = useState({
        id: null,
        text: '',
        isCompleted: false,
        isEdited: false
    })

    const editSubmit = todo => {
        const editTodo = { ...edit, id: nanoid() }
        submitEditTodo(todo, editTodo)
        setEdit({
            id: null,
            text: '',
            isCompleted: false,
            isEdited: false
        })
    }

    return (
        todos.map((todo, index) => (
            <div
                className={todo.isCompleted ? 'todo-container complete' : 'todo-container'}
                key={index}
            >
                <div className="todo">
                    <div className="todo-head">
                        {todo.isCompleted
                            ?
                            <RiCheckboxCircleFill size='24px' onClick={() => undoCompleteTodo(todo)} />
                            :
                            <RiCheckboxBlankCircleFill size='24px' onClick={() => completeTodo(todo)} />
                        }
                        {console.log('todo edit: ' + todo.isEdited)}
                        {todo.isEdited
                            ? <form className='edit-form' onSubmit={() => editSubmit(todo)}>
                                <input
                                    type='text'
                                    placeholder='Edit here...'
                                    className='edit-input'
                                    value={edit.text}
                                    onChange={e => setEdit({ ...edit, text: e.target.value })}
                                />
                            </form>
                            : <p>{todo.text}</p>}
                    </div>
                    <div className="todo-tail">
                        {edit.text !== ''
                            ? <RiEditCircleFill
                                size='24px'
                                onClick={() => editSubmit(todo)}
                            />
                            : <RiEditCircleFill
                                size='24px'
                                onClick={() => editTodo(todo)}
                            />
                        }
                        <RiCloseCircleFill
                            size='24px'
                            style={{ marginLeft: 8 }}
                            onClick={() => removeTodo(todo)}
                        />
                    </div>
                </div>
            </div >
        ))
    );
}

export default Todo;