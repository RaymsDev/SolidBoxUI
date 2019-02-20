import { ITask } from "../../models/Task";
import { TasksActionTypes, TaskTypes } from "./action";
import { ITasksState } from "./types";

const initialState: ITasksState = {
  tasks: new Array<ITask>(),
  isFetching: false,
  isError: false,
  errorMessage: ''
};

export const taskReducer = (state: ITasksState = initialState, action: TasksActionTypes): ITasksState => {
  switch (action.type) {
    case TaskTypes.FETCH_TASKS:
      return {
        ...state,
        isFetching: true,
        isError: false,
        errorMessage: ''
      };
    case TaskTypes.RECEIVE_TASKS:
      return {
        ...state,
        tasks: [
          ...action.tasks
        ],
        isFetching: false,
        isError: false,
        errorMessage: ''
      };
    case TaskTypes.RECEIVE_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true,
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }

};
