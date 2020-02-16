
import React, { useState } from 'react'
import { useStore } from '../store/use-store'
import { TodoItem as TodoClass } from '../store/todo-item';
import "./TodoItem.css";


interface IProp {
    todo: TodoClass
}

const TodoItem = ({ todo }: IProp) => {
    const todoList = useStore();
    const [text, setText] = useState("");
    const [isEditing, setEdit] = useState(false);

    const saveText = (text: string) => {
        todo.updateTodo(text);
        setText("");
        setEdit(false);
    }
    return (
        <div className="todo-item">
            {
                isEditing ? 
                <div>
                    <input type="text" onChange={(e) => setText(e.target.value)} />
                    <div className="actions">
                        <button className="primary" onClick={() => saveText(text)}>Salvar</button>
                        <button className="warning" onClick={() => setEdit(false)}>Exit</button>
                    </div>
                </div>
                : <div>
                <span>{todo.text}</span>
                <div className="actions">
                    <input onChange={todo.toggleIsDone} type="checkbox" defaultChecked={todo.isDone} />
                    <button className="primary" onClick={() => setEdit(true)}>Editar</button>
                    <button className="warning" onClick={() => todoList.removeTodo(todo)}>X</button>
                </div>
            </div>
            }
        </div>
    )
}

export default TodoItem
