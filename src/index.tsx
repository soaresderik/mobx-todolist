import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StoreProvider } from './store/provider';
import { TodoList } from './store/todo-list';
import './index.css';

const todoList = new TodoList([
    'Should Starting Writing in React',
    'Should Learn MobX',
    'Should Watch Once Piece :)'
]);

//@ts-ignore - for debugging
window.todoList = todoList

ReactDOM.render(<StoreProvider value={todoList}><App /></StoreProvider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
