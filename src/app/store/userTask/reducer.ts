import { normalize, schema } from 'normalizr';
import { IListNormalized } from '../../models/IListNormalized';
import { IUserTask } from '../../models/UserTask';
import { IReceiveAction, UserTasksActionTypes, UserTaskTypes } from './action';
import { IUserTasksState } from './type';

const initialState: IUserTasksState = {
  userTasks: {
    idList: [],
    entities: {},
  },
  isFetching: false,
  isError: false,
  errorMessage: '',
};

const normalizeTasks = (userTasks: IUserTask[]): IListNormalized<IUserTask> => {
  const userTask = new schema.Entity('userTasks');
  const mySchema = { userTasks: [userTask] };
  const normalizedData = normalize(
    {
      userTasks,
    },
    mySchema,
  );
  return {
    idList: normalizedData.result.userTasks,
    entities: normalizedData.entities.userTasks,
  };
};

const receiveUserTasks = (
  state: IUserTasksState = initialState,
  action: IReceiveAction,
): IUserTasksState => {
  const { entities, idList } = normalizeTasks(action.userTasks);
  return {
    ...state,
    userTasks: {
      idList: Array.from(new Set([...state.userTasks.idList, ...idList])),
      entities: {
        ...state.userTasks.entities,
        ...entities,
      },
    },
    isFetching: false,
    isError: false,
    errorMessage: '',
  };
};

const taskReducer = (
  state: IUserTasksState = initialState,
  action: UserTasksActionTypes,
): IUserTasksState => {
  switch (action.type) {
    case UserTaskTypes.FETCH:
    case UserTaskTypes.FETCH_BY_LINK:
      return {
        ...state,
        isFetching: true,
        isError: false,
        errorMessage: '',
      };
    case UserTaskTypes.RECEIVE:
      return receiveUserTasks(state, action);
    case UserTaskTypes.RECEIVE_ERROR:
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
