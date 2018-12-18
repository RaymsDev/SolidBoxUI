import * as deepFreeze from "deep-freeze";
import { ITodo } from "../../models/Todo";
import { getHigherId, todoReducer, todosReducer } from "./reducer";
import { IAddTodoAction, ITodosState, IToggleAction, TodoTypes } from "./types";

describe('Todo Reducer', () => {

  test('Get Higher Id', () => {
    const todoList = [{
      id: 0,
      text: 'todo should finish',
      isFinished: true
    }, {
      id: 1,
      text: 'todo 2',
      isFinished: false
    }];

    const result = getHigherId(todoList);
    const expectedId = 1;
    expect(result).toBe(expectedId);
  });

  test('Add Todo', () => {

    const stateBefore = new Array<ITodo>();

    const action: IAddTodoAction = {
      type: TodoTypes.ADD_TODO,
      todoText: 'Learn Redux'
    };

    const stateAfter = [{
      id: 1,
      text: 'Learn Redux',
      isFinished: false
    }];

    deepFreeze(stateBefore);
    deepFreeze(action);

    const result = todoReducer(stateBefore, action);
    expect(result).toEqual(stateAfter);
  });

  test('Toggle todo', () => {
    const stateBefore: ITodo[] = [{
      id: 1,
      text: 'todo should finish',
      isFinished: false
    }, {
      id: 2,
      text: 'todo 2',
      isFinished: false
    }];

    const action: IToggleAction = {
      type: TodoTypes.TOGGLE_TODO,
      todoId: 1
    };

    const stateAfter = [{
      id: 1,
      text: 'todo should finish',
      isFinished: true
    }, {
      id: 2,
      text: 'todo 2',
      isFinished: false
    }];

    deepFreeze(stateBefore);
    deepFreeze(action);

    const result = todoReducer(stateBefore, action);

    expect(result).toEqual(stateAfter);
  });
});

describe('Todos Reducer', () => {
  test('Add Todo', () => {

    const stateBefore: ITodosState = {
      todos: new Array<ITodo>()
    };

    const action: IAddTodoAction = {
      type: TodoTypes.ADD_TODO,
      todoText: 'Learn Redux'
    };

    const stateAfter: ITodosState = {
      todos: [{
        id: 1,
        text: 'Learn Redux',
        isFinished: false
      }]
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    const result = todosReducer(stateBefore, action);
    expect(result).toEqual(stateAfter);
  });

  test('Toggle todo', () => {
    const stateBefore: ITodosState = {
      todos: [{
        id: 1,
        text: 'todo should finish',
        isFinished: false
      }, {
        id: 2,
        text: 'todo 2',
        isFinished: false
      }]
    };

    const action: IToggleAction = {
      type: TodoTypes.TOGGLE_TODO,
      todoId: 1
    };

    const stateAfter: ITodosState = {
      todos: [{
        id: 1,
        text: 'todo should finish',
        isFinished: true
      }, {
        id: 2,
        text: 'todo 2',
        isFinished: false
      }]
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    const result = todosReducer(stateBefore, action);

    expect(result).toEqual(stateAfter);
  });
});
