import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [completedTodoList, setCompletedTodoList] = useState([])
    const [countCompleted, setCountCompleted] = useState(0)
    const [flag, setFlag] = useState(false)

    const addTodo = todo => {
        // remove whitespace input
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos)
    }

    const editTodo = todo => {
        console.log('edit btn pressed')
        const editedTodo = { ...todo, isEdited: !todo.isEdited };
        const newTodos = todos.filter(prev => prev.id !== todo.id)
        setTodos([...newTodos, editedTodo])
    }

    const submitEditTodo = (todo, editTodo) => {
        console.log(todo)
        const newTodos = todos.filter(prev => prev.id !== todo.id)
        console.log(newTodos)
        // const editedTodo = { ...todo, isEdited: false };

        console.log([...newTodos, editTodo])
        setTodos([...newTodos, editTodo])
    }

    const completeTodo = todo => {
        console.log('completed the todo')
        // set completed list
        const newCompletedTodo = { ...todo, isCompleted: true };
        const newCompletedTodoList = [...completedTodoList, newCompletedTodo];
        setCompletedTodoList(newCompletedTodoList);

        // set todos list
        const newTodos = todos.filter(prev => prev.id !== todo.id)
        setTodos([...newTodos, newCompletedTodo])

        // set the number of completed todos
        setCountCompleted(prev => prev + 1)
    }

    const undoCompleteTodo = todo => {
        console.log('uncompleted the todo')
        // set completed list
        const newCompletedTodos = completedTodoList.filter(prev => prev.id !== todo.id);
        setCompletedTodoList(newCompletedTodos)

        // set newTodos
        const newCompletedTodo = { ...todo, isCompleted: false };
        const newTodos = todos.filter(prev => prev.id !== todo.id)
        setTodos([...newTodos, newCompletedTodo])

        // set couter
        setCountCompleted(prev => prev - 1)
    }

    const removeTodo = selectedTodo => {
        const newTodos = todos.filter(todo => todo.id !== selectedTodo.id)
        setTodos(newTodos)
        // set couter
        if (todos.length === 1) {
            setCountCompleted(0)
        } else if (selectedTodo.isCompleted) {
            setCountCompleted(prev => prev - 1)
        }
    }

    useEffect(() => {
        // set flag to show the completed couter
        todos.length !== 0 ? setFlag(true) : setFlag(false)
    }, [todos])

    return (
        <div className="container">
            <h1 className='app-name'>TODO APP</h1>
            {flag && (
                <div className="completedList">
                    <h3>Completed: </h3>
                    <div className="completedNum">
                        <h5>{countCompleted}</h5>
                    </div>
                </div>
            )}
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                undoCompleteTodo={undoCompleteTodo}
                removeTodo={removeTodo}
                editTodo={editTodo}
                submitEditTodo={submitEditTodo}
                flag={flag}
            />
        </div>
    );
}

export default TodoList;