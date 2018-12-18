import { IFilter } from "../../../models/Filter";
import { ITodo } from "../../../models/Todo";

export interface ITodoPageProps {
  todos: ITodo[];
  filters: IFilter[];
  onTodoClick: (todoId: number) => void;
  onTodoCreate: (todoText: string) => void;
  onFilter: (filter: string) => void;
}
