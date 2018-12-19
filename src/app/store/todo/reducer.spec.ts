import * as deepFreeze from "deep-freeze";
import { ITodo } from "../../models/Todo";
import { TodoActions } from "./action";
import { getHigherId, todosReducer } from "./reducer";
import { IAddTodoAction, ITodosState, IToggleAction, TodoTypes, VisibilityFilter } from "./types";

const mixedTodoList: ITodo[] = [{
  id: 1,
  text: 'finished todo',
  isFinished: true
}, {
  id: 2,
  text: 'todo 2',
  isFinished: false
}];

const initialTodoState: ITodosState = {
  todos: mixedTodoList,
  visibleTodos: []
};

describe('Todo Reducer', () => {

  test('Get Higher Id', () => {
    const todoList = mixedTodoList;

    const result = getHigherId(todoList);
    const expectedId = 2;
    expect(result).toBe(expectedId);
  });

  test('Add Todo', () => {

    const stateBefore = initialTodoState;

    const action: IAddTodoAction = {
      type: TodoTypes.ADD_TODO,
      todoText: 'todo 3'
    };

    const stateAfter: ITodosState = {
      todos: [
        {
          id: 1,
          text: 'finished todo',
          isFinished: true
        }, {
          id: 2,
          text: 'todo 2',
          isFinished: false
        }, {
          id: 3,
          text: 'todo 3',
          isFinished: false
        }],
      visibleTodos: [
        {
          id: 1,
          text: 'finished todo',
          isFinished: true
        }, {
          id: 2,
          text: 'todo 2',
          isFinished: false
        }, {
          id: 3,
          text: 'todo 3',
          isFinished: false
        },
      ]
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    const result = todosReducer(stateBefore, action);
    expect(result).toEqual(stateAfter);
  });

  test('Toggle todo', () => {
    const stateBefore: ITodosState = initialTodoState;

    const action: IToggleAction = {
      type: TodoTypes.TOGGLE_TODO,
      todoId: 2
    };

    const stateAfter: ITodosState = {
      todos: [
        {
          id: 1,
          text: 'finished todo',
          isFinished: true
        }, {
          id: 2,
          text: 'todo 2',
          isFinished: true
        }],
      visibleTodos: [
        {
          id: 1,
          text: 'finished todo',
          isFinished: true
        }, {
          id: 2,
          text: 'todo 2',
          isFinished: true
        }
      ]
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    const result = todosReducer(stateBefore, action);

    expect(result).toEqual(stateAfter);
  });
});

describe('Todos Visibility', () => {

  test('Filter All Todo', () => {
    const stateBefore: ITodosState = {
      todos: mixedTodoList,
      visibleTodos: []
    };
    const action = TodoActions.setVisibility(VisibilityFilter.SHOW_ALL);
    const stateAfter: ITodosState = {
      todos: mixedTodoList,
      visibleTodos: mixedTodoList
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    deepFreeze(stateAfter);

    expect(stateAfter).toEqual(todosReducer(stateBefore, action));
  });

  test('Filter Active Todo', () => {
    const stateBefore: ITodosState = {
      todos: mixedTodoList,
      visibleTodos: new Array<ITodo>()
    };
    const action = TodoActions.setVisibility(VisibilityFilter.SHOW_ACTIVE);
    const stateAfter: ITodosState = {
      todos: mixedTodoList,
      visibleTodos: [{
        id: 2,
        text: 'todo 2',
        isFinished: false
      }]
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    deepFreeze(stateAfter);

    expect(stateAfter).toEqual(todosReducer(stateBefore, action));
  });

  test('Filter Complete Todo', () => {
    const stateBefore: ITodosState = {
      todos: mixedTodoList,
      visibleTodos: new Array<ITodo>()
    };
    const action = TodoActions.setVisibility(VisibilityFilter.SHOW_COMPLETE);
    const stateAfter: ITodosState = {
      todos: mixedTodoList,
      visibleTodos: [{
        id: 1,
        text: 'finished todo',
        isFinished: true
      }]
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    deepFreeze(stateAfter);

    expect(stateAfter).toEqual(todosReducer(stateBefore, action));
  });
});
