import { ITodo } from './../../models/Todo';
import { ITodoService } from "./ITodo.service";

const asyncDelay = 20;

class TodoFakeService implements ITodoService {
  public todoList: ITodo[];
  constructor() {
    this.todoList = [{
      id: 1,
      text: '1st Todo',
      isFinished: true
    }];
  }

  public create(todo: ITodo): Promise<ITodo> {
    return new Promise<ITodo>((resolve, reject) => {
      this.todoList = [
        ...this.todoList,
        todo
      ];

      setTimeout(() => {
        resolve(todo);
      }, asyncDelay);
    });

  }

  public read(): Promise<ITodo[]> {
    const promise = new Promise<ITodo[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.todoList);
      }, asyncDelay);
    });

    return promise;

  }

  public update(id: number, todo: ITodo): Promise<ITodo> {
    const promise = new Promise<ITodo>((resolve, reject) => {
      this.todoList = this.todoList.reduce((acc, t) => {

        if (t.id === id) {
          acc.push(todo);
          return acc;
        }

        acc.push(t);
        return acc;
      }, new Array<ITodo>());

      setTimeout(() => {
        resolve(todo);
      }, asyncDelay);
    });
    return promise;

  }

  public delete(id: number): Promise<void> {

    const promise = new Promise<void>((resolve, reject) => {

      this.todoList = this.todoList.reduce((acc, t) => {

        if (t.id === id) {
          return acc;
        }

        acc.push(t);
        return acc;
      }, new Array<ITodo>());

      setTimeout(() => {
        resolve();
      }, asyncDelay);
    });
    return promise;

  }
}

const todoFakeService = new TodoFakeService();

export default todoFakeService;
