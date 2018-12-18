import { ITodo } from "../../../models/Todo";

export interface ITodoList {
  todos: ITodo[];
  onTodoClick: (todoId: number) => void;
}
