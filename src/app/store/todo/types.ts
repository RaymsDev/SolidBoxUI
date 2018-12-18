import { Action } from "redux";
import { ITodo } from "../../models/Todo";

export enum TodoTypes {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO'
}

export interface ITodosState {
  todos: ITodo[];
}

export interface IAddTodoAction extends Action {
  type: TodoTypes.ADD_TODO;
  todoText: string;
}

export interface IToggleAction extends Action {
  type: TodoTypes.TOGGLE_TODO;
  todoId: number;
}

export type TodoActionTypes =
  | IAddTodoAction
  | IToggleAction;
