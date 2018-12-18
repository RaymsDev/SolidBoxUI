
import { ITodo } from "../../models/Todo";
import { ITodosState, TodoActionTypes, TodoTypes } from "./types";

const todosStateInit: ITodosState = {
  todos: [{
    id: 0,
    text: '1st Todo',
    isFinished: true
  }]
};

export const todosReducer = (state: ITodosState = todosStateInit, action: TodoActionTypes): ITodosState => {
  switch (action.type) {

    case TodoTypes.ADD_TODO:
    case TodoTypes.TOGGLE_TODO:
      return {
        ...state,
        todos: todoReducer(state.todos, action)
      };

    default:
      return state;
  }
};

export const todoReducer = (state: ITodo[] = new Array<ITodo>(), action: TodoActionTypes): ITodo[] => {
  switch (action.type) {

    case TodoTypes.ADD_TODO:
      return [
        ...state,
        {
          id: getHigherId(state) + 1,
          text: action.todoText,
          isFinished: false
        }
      ];

    case TodoTypes.TOGGLE_TODO:
      return state.map((todo) => {

        if (todo.id !== action.todoId) {
          return todo;
        }

        return {
          ...todo,
          isFinished: !todo.isFinished
        };

      });

    default:
      return state;
  }
};

export const getHigherId = (todos: ITodo[]): number => {
  const initial = 0;
  return todos.reduce<number>((acc, todo) => {
    if (todo.id > acc) {
      acc = todo.id;
    }
    return acc;
  }, initial);
};
