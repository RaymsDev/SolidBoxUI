import * as deepFreeze from "deep-freeze";
import { ITodo } from "../../models/Todo";
import { todoReducer, todosReducer } from "./reducer";
import { IAddTodoAction, ITodosState, IToggleAction, TodoTypes } from "./types";

describe('Todo Reducer', () => {
  test('Add Todo', () => {

    const stateBefore = new Array<ITodo>();

    const action: IAddTodoAction = {
      type: TodoTypes.ADD_TODO,
      todo: {
        id: 0,
        text: 'Learn Redux',
        isFinished: false
      }
    };

    const stateAfter = [{
      id: 0,
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
      id: 0,
      text: 'todo should finish',
      isFinished: false
    }, {
      id: 1,
      text: 'todo 2',
      isFinished: false
    }];

    const action: IToggleAction = {
      type: TodoTypes.TOGGLE_TODO,
      todoId: 0
    };

    const stateAfter = [{
      id: 0,
      text: 'todo should finish',
      isFinished: true
    }, {
      id: 1,
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
      todo: {
        id: 0,
        text: 'Learn Redux',
        isFinished: false
      }
    };

    const stateAfter: ITodosState = {
      todos: [{
        id: 0,
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
        id: 0,
        text: 'todo should finish',
        isFinished: false
      }, {
        id: 1,
        text: 'todo 2',
        isFinished: false
      }]
    };

    const action: IToggleAction = {
      type: TodoTypes.TOGGLE_TODO,
      todoId: 0
    };

    const stateAfter: ITodosState = {
      todos: [{
        id: 0,
        text: 'todo should finish',
        isFinished: true
      }, {
        id: 1,
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
