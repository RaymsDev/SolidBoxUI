import { normalize, schema } from 'normalizr';
import { ITask } from '../../models/Task';
import { IReceiveTasksAction, TasksActionTypes, TaskTypes } from './action';
import { ITasksState } from './type';

const initialState: ITasksState = {
  tasks: {},
  isFetching: false,
  isError: false,
  errorMessage: '',
};

const normalizeTasks = (tasks: ITask[]) => {
  const task = new schema.Entity('tasks');
  const mySchema = { tasks: [task] };
  const normalizedData = normalize(
    {
      tasks,
    },
    mySchema,
  );
  return normalizedData;
};

const receiveTasks = (
  state: ITasksState = initialState,
  action: IReceiveTasksAction,
): ITasksState => {
  const { tasks } = normalizeTasks(action.tasks).entities;
  return {
    ...state,
    tasks: {
      ...state.tasks,
      ...tasks,
    },
    isFetching: false,
    isError: false,
    errorMessage: '',
  };
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
      return receiveTasks(state, action);
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
