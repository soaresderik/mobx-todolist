import { observable } from "mobx";

export class TodoItem {
    id = Date.now();

    @observable text = "";
    @observable isDone = false;

    constructor(text: string){
        this.text = text;
    }

    toggleIsDone = () => {
        this.isDone = !this.isDone
    }

    updateTodo = (text: string) => {
        this.text = text;
    }
}