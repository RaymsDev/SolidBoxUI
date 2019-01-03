import { Action } from "redux";
import { ITodo } from "../../models/Todo";

export interface ITodosState {
  todos: ITodo[];
  visibleTodos: ITodo[];
}
