import * as DeepFreeze from 'deep-freeze';
import { IUserTask } from '../../models/UserTask';
import {
  IFetchAction,
  IFetchByLinkAction,
  IReceiveAction,
  IReceiveErrorAction,
  UserTaskTypes,
} from './action';
import reducer from './reducer';
import { IUserTasksState } from './type';

const initialState: IUserTasksState = {
  userTasks: {
    idList: [],
    entities: {},
  },
  errorMessage: '',
  isError: false,
  isFetching: false,
};

const errorMessage = 'Error Message';

describe('UserTask Reducer', () => {
  test('Fetch', () => {
    const stateBefore = initialState;
    DeepFreeze(stateBefore);
    const action: IFetchAction = {
      type: UserTaskTypes.FETCH,
    };
    DeepFreeze(action);
    const stateAfter: IUserTasksState = {
      ...initialState,
      isFetching: true,
    };
    DeepFreeze(stateAfter);

    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });
  test('Fetch By Link', () => {
    const stateBefore = initialState;
    DeepFreeze(stateBefore);
    const action: IFetchByLinkAction = {
      type: UserTaskTypes.FETCH_BY_LINK,
    };
    DeepFreeze(action);
    const stateAfter: IUserTasksState = {
      ...initialState,
      isFetching: true,
    };
    DeepFreeze(stateAfter);

    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });
  test('Receive', () => {
    const stateBefore = initialState;
    const userTasks: IUserTask[] = [
      {
        userId: 1,
        taskId: 1,
        comment: 'test',
        links: [],
        duration: 1,
        id: 1,
        isFlexible: true,
        startAt: new Date(),
      },
      {
        userId: 1,
        taskId: 1,
        comment: 'test',
        links: [],
        duration: 1,
        id: 2,
        isFlexible: true,
        startAt: new Date(),
      },
    ];
    DeepFreeze(stateBefore);
    const action: IReceiveAction = {
      type: UserTaskTypes.RECEIVE,
      userTasks,
    };
    DeepFreeze(action);
    const stateAfter: IUserTasksState = {
      ...initialState,
      userTasks: {
        idList: [1, 2],
        entities: {
          1: {
            ...userTasks[0],
          },
          2: {
            ...userTasks[1],
          },
        },
      },
    };
    DeepFreeze(stateAfter);

    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });
  test('Receive Error', () => {
    const stateBefore = initialState;
    DeepFreeze(stateBefore);
    const action: IReceiveErrorAction = {
      type: UserTaskTypes.RECEIVE_ERROR,
      errorMessage,
    };
    DeepFreeze(action);
    const stateAfter: IUserTasksState = {
      ...initialState,
      isError: true,
      errorMessage,
    };
    DeepFreeze(stateAfter);

    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });
});
