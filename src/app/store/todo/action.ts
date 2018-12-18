import { ITodo } from "../../models/Todo";
import { IAddTodoAction, IToggleAction, TodoTypes } from "./types";

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
}
