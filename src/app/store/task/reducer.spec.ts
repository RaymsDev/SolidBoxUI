import * as DeepFreeze from 'deep-freeze';
import { ITask } from '../../models/Task';
import {
  IFetchTaskByLinkAction,
  IFetchTasksAction,
  IReceiveErrorAction,
  IReceiveTasksAction,
  TaskTypes,
} from './action';
import reducer from './reducer';
import { ITasksState } from './type';

const initialState: ITasksState = {
  tasks: {
    idList: [],
    entities: {},
  },
  errorMessage: '',
  isError: false,
  isFetching: false,
};

const errorMessage = 'Error Message';

describe('Task Reducer', () => {
  test('Fetch', () => {
    const stateBefore = initialState;
    DeepFreeze(stateBefore);
    const action: IFetchTasksAction = {
      type: TaskTypes.FETCH_TASKS,
    };
    DeepFreeze(action);
    const stateAfter: ITasksState = {
      ...initialState,
      isFetching: true,
    };
    DeepFreeze(stateAfter);

    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });
  test('Fetch By Link', () => {
    const stateBefore = initialState;
    DeepFreeze(stateBefore);
    const action: IFetchTaskByLinkAction = {
      type: TaskTypes.FETCH_TASKS_BY_LINK,
    };
    DeepFreeze(action);
    const stateAfter: ITasksState = {
      ...initialState,
      isFetching: true,
    };
    DeepFreeze(stateAfter);

    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });
  test('Receive', () => {
    const stateBefore = initialState;
    const tasks: ITask[] = [
      {
        projectId: 1,
        links: [],
        load: 5,
        sortOrder: 1,
        taskTypeId: 1,
        name: 'fake task 1',
        id: 1,
        realizedPercentage: 10,
      },
      {
        projectId: 1,
        links: [],
        load: 5,
        sortOrder: 1,
        taskTypeId: 1,
        name: 'fake task 2',
        id: 2,
        realizedPercentage: 10,
      },
    ];
    DeepFreeze(stateBefore);
    const action: IReceiveTasksAction = {
      type: TaskTypes.RECEIVE_TASKS,
      tasks,
    };
    DeepFreeze(action);
    const stateAfter: ITasksState = {
      ...initialState,
      tasks: {
        idList: [1, 2],
        entities: {
          1: {
            ...tasks[0],
          },
          2: {
            ...tasks[1],
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
      type: TaskTypes.RECEIVE_TASKS_ERROR,
      errorMessage,
    };
    DeepFreeze(action);
    const stateAfter: ITasksState = {
      ...initialState,
      isError: true,
      errorMessage,
    };
    DeepFreeze(stateAfter);

    expect(stateAfter).toEqual(reducer(stateBefore, action));
  });
});
