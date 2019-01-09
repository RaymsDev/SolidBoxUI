import { IFilter } from "../../../models/Filter";
import { ITodo } from "../../../models/Todo";

export interface ITodoListProps {
  todos: ITodo[];
  filters: IFilter[];
  onTodoClick: (todoId: number) => void;
  onTodoCreate: (todoText: string) => void;
  onFilter: (filter: string) => void;
}
