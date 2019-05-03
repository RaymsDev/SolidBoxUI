import { normalize, schema } from 'normalizr';
import { IListNormalized } from '../../models/IListNormalized';
import { ITask } from '../../models/Task';
import { IReceiveTasksAction, TasksActionTypes, TaskTypes } from './action';
import { ITasksState } from './type';

const initialState: ITasksState = {
  tasks: {
    idList: [],
    entities: {},
  },
  isFetching: false,
  isError: false,
  errorMessage: '',
};

const normalizeTasks = (tasks: ITask[]): IListNormalized<ITask> => {
  const task = new schema.Entity('tasks');
  const mySchema = { tasks: [task] };
  const normalizedData = normalize(
    {
      tasks,
    },
    mySchema,
  );
  return {
    idList: normalizedData.result.tasks,
    entities: normalizedData.entities.tasks,
  };
};

const receiveTasks = (
  state: ITasksState = initialState,
  action: IReceiveTasksAction,
): ITasksState => {
  const { entities, idList } = normalizeTasks(action.tasks);
  return {
    ...state,
    tasks: {
      idList: Array.from(new Set([...state.tasks.idList, ...idList])),
      entities: {
        ...state.tasks.entities,
        ...entities,
      },
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
