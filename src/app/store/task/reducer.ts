import { TasksActionTypes, TaskTypes } from './action';
import { ITasksState } from './type';

const initialState: ITasksState = {
  tasks: [],
  isFetching: false,
  isError: false,
  errorMessage: '',
};

const taskReducer = (
  state: ITasksState = initialState,
  action: TasksActionTypes,
): ITasksState => {
  switch (action.type) {
    case TaskTypes.FETCH_TASKS:
    case TaskTypes.FETCH_TASKS_BY_LINK:
      return {
        ...state,
        isFetching: true,
        isError: false,
        errorMessage: '',
      };
    case TaskTypes.RECEIVE_TASKS:
      return {
        ...state,
        tasks: action.tasks,
        isFetching: false,
        isError: false,
        errorMessage: '',
      };
    case TaskTypes.RECEIVE_TASKS_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};

export default taskReducer;
