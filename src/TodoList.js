import React, { useState } from 'react';

const TodoList = ()=> {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = () => {
        if (newTodo.trim() !== ""){
            setTodos([...todos, newTodo]);
            setNewTodo("")

        }
    }
    return(
        <div>
            <h1> To-Do List</h1>
        </div>
    );
};

export default TodoList;