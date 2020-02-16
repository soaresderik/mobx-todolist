import { useContext } from "react";
import { StoreContext } from "./provider";
import { TodoList } from "./todo-list";

export const useStore = (): TodoList => useContext(StoreContext);