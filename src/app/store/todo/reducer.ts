
import { ITodo } from "../../models/Todo";
import { ISetVisibilityAction, TodoActionTypes, TodoTypes, VisibilityFilter } from "./action";
import { ITodosState } from "./types";

const todosStateInit: ITodosState = {
  todos: [{
    id: 0,
    text: '1st Todo',
    isFinished: true
  }],
  visibleTodos: []
};

export const todosReducer = (state: ITodosState = todosStateInit, action: TodoActionTypes): ITodosState => {
  switch (action.type) {

    case TodoTypes.ADD_TODO:
    case TodoTypes.TOGGLE_TODO:
      const todos = todoReducer(state.todos, action);
      return {
        ...state,
        todos,
        visibleTodos: todos
      };
    case TodoTypes.SET_VISIBILITY_FILTER:
    default:
      return {
        ...state,
        visibleTodos: getVisibleTodo(state.todos, action)
      };
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

export const getVisibleTodo = (state: ITodo[] = new Array<ITodo>(), action: ISetVisibilityAction): ITodo[] => {
  switch (action.filter) {
    case VisibilityFilter.SHOW_ACTIVE:
      return state.filter((todo) => !todo.isFinished);
    case VisibilityFilter.SHOW_COMPLETE:
      return state.filter((todo) => todo.isFinished);
    case VisibilityFilter.SHOW_ALL:
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
