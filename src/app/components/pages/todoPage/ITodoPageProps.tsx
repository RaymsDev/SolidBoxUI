import { ITodo } from "../../../models/Todo";

export interface ITodoPageProps {
  todos: ITodo[];
  onTodoClick: (todoId: number) => void;
  onTodoCreate: (todoText: string) => void;
}
