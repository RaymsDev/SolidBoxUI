import { Action } from "redux";
import { ITodo } from "../../models/Todo";

export enum TodoTypes {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
}

export enum VisibilityFilter {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
  SHOW_COMPLETE = 'SHOW_COMPLETE',
}

export interface ITodosState {
  todos: ITodo[];
  visibleTodos: ITodo[];
}

export interface IAddTodoAction extends Action {
  type: TodoTypes.ADD_TODO;
  todoText: string;
}

export interface IToggleAction extends Action {
  type: TodoTypes.TOGGLE_TODO;
  todoId: number;
}
export interface ISetVisibilityAction extends Action {
  type: TodoTypes.SET_VISIBILITY_FILTER;
  filter: string;
}

export type TodoActionTypes =
  | IAddTodoAction
  | IToggleAction
  | ISetVisibilityAction;