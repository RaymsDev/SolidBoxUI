import { ITodo } from "../../models/Todo";
import todoService from "./todoFake.service";

describe('Todo Service', () => {
  test('Create Todo', () => {
    const todoNumber = todoService.todoList.length;
    const newTodo: ITodo = {
      id: 2,
      text: 'bonjour',
      isFinished: false
    };

    todoService.create(newTodo)
      .then((todo) => {
        expect(todo).toEqual(newTodo);
        expect(todoService.todoList.length).toEqual(todoNumber + 1);
      });
  });

  test('Read Todo', () => {
    const todoNumber = todoService.todoList.length;
    todoService.read()
      .then((todos) => {
        expect(todos).toBe(todoNumber);
      });
  });

  test('Update Todo', () => {
    const updatedTodo: ITodo = {
      id: 1,
      text: 'updated Todo',
      isFinished: false
    };

    todoService.update(updatedTodo.id, updatedTodo)
      .then((todo) => {
        expect(todo).toEqual(updatedTodo);
      });
  });

  test('Delete Todo', () => {

    const todoNumber = todoService.todoList.length;

    todoService.delete(1)
      .then(() => {
        expect(todoService.todoList.length).toBe(todoNumber - 1);
      });
  });
});
