import { ITodo } from '../../../models/Todo';

export interface ITodoProps {
  todo: ITodo;
  onClickHandle: (todoId: number) => void;
}
