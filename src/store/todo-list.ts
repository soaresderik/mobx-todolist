import { observable, action, computed } from "mobx";
import { TodoItem } from "./todo-item";


export class TodoList {
    @observable.shallow list: TodoItem[] = [];
    constructor(todos: string[]){
        todos.forEach(this.addTodo)
    }

    @action
    addTodo = (text: string) => {
        this.list.push(new TodoItem(text));
    }

    removeTodo = (todo: TodoItem) => {
        this.list.splice(this.list.indexOf(todo), 1);
    };

    @computed
    get finishedTodos(): TodoItem[] {
        return this.list.filter(i => i.isDone);
    }

    get openTodos(): TodoItem[] {
        return this.list.filter(i => !i.isDone);
    }
}