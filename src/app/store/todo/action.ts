import { ITodo } from "../../models/Todo";
import { IAddTodoAction, ISetVisibilityAction, IToggleAction, TodoTypes, VisibilityFilter } from "./types";

export class TodoActions {
  public static addTodo(todoText: string): IAddTodoAction {
    return {
      type: TodoTypes.ADD_TODO,
      todoText
    };
  }

  public static toggleTodo(todoId: number): IToggleAction {
    return {
      type: TodoTypes.TOGGLE_TODO,
      todoId
    };
  }

  public static setVisibility(filter: string): ISetVisibilityAction {
    return {
      type: TodoTypes.SET_VISIBILITY_FILTER,
      filter
    };
  }
}
