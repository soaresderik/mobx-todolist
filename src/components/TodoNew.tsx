import React, { useState } from 'react'
import { useStore } from '../store/use-store';
import "./TodoNew.css";

const TodoNew = () => {
    const [newTodo, setTodo] = useState("");
    const todoList = useStore();

    const saveTodo = (text: string) => {
        if (!text.length) return;
        todoList.addTodo(text);
        setTodo("");
    }

    return (
        <div className="todo-new">
            <input type="text" onChange={(e) => setTodo(e.target.value)} value={newTodo}/>
            <button onClick={() => saveTodo(newTodo)}>Salvar</button>
        </div>
    )
}

export default TodoNew
