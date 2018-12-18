import { ITodo } from "../../models/Todo";

export interface ITodoService {
  create: (todo: ITodo) => Promise<ITodo>;
  read: () => Promise<ITodo[]>;
  update: (id: number, todo: ITodo) => Promise<ITodo>;
  delete: (id: number) => Promise<void>;
}
