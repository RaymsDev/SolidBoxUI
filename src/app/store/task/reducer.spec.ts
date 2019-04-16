import * as DeepFreeze from 'deep-freeze';

import { taskListMock } from '../../services/task/taskFake.service';
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
  tasks: [],
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
    DeepFreeze(stateBefore);
    const action: IReceiveTasksAction = {
      type: TaskTypes.RECEIVE_TASKS,
      tasks: taskListMock,
    };
    DeepFreeze(action);
    const stateAfter: ITasksState = {
      ...initialState,
      tasks: taskListMock,
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
