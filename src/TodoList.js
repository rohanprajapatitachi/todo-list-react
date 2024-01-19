import React, { useState } from 'react';

const TodoList = ()=>{
    const [todos, setTodos] = useState([]);
    return(
        <div>
            <h1> To-Do List</h1>
        </div>
    );
};

export default TodoList;