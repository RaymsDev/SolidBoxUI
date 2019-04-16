import * as DeepFreeze from 'deep-freeze';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import taskFakeService, {
  linksMock,
  taskListMock,
} from '../../services/task/taskFake.service';
import TaskActions, { TasksActionTypes } from './action';
import { ITasksState } from './type';

const initialState: ITasksState = {
  tasks: [],
  isError: false,
  isFetching: false,
  errorMessage: '',
};

const middlewares = [thunk];
const mockStore = configureMockStore<ITasksState>(middlewares);

describe('Task Action', async () => {
  test('Fetch Task Async', () => {
    const store = mockStore(initialState);
    const taskActions = new TaskActions(store, taskFakeService);
    const expectedActions: TasksActionTypes[] = [
      taskActions.receive(taskListMock),
    ];

    DeepFreeze(expectedActions);

    const action = taskActions.fetchAsync();

    DeepFreeze(action);

    return store.dispatch<any>(action).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('Fetch Task by link Async', () => {
    const store = mockStore(initialState);
    const taskActions = new TaskActions(store, taskFakeService);
    const expectedActions: TasksActionTypes[] = [
      taskActions.receive(taskListMock),
    ];

    DeepFreeze(expectedActions);

    const action = taskActions.fetchByLinkAsync(linksMock);

    DeepFreeze(action);

    return store.dispatch<any>(action).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('Fetch Tasks ', () => {
    const store = mockStore(initialState);
    const taskActions = new TaskActions(store, taskFakeService);

    const expectedActions: any = [taskActions.fetch()];
    DeepFreeze(expectedActions);

    const action = taskActions.fetch();
    DeepFreeze(action);

    store.dispatch(action);
    const actualActions = store.getActions();
    expect(actualActions).toEqual(expectedActions);
  });

  test('Fetch Client Projects ', () => {
    const store = mockStore(initialState);
    const taskActions = new TaskActions(store, taskFakeService);

    const expectedActions: any = [taskActions.fetchByLink(linksMock)];
    DeepFreeze(expectedActions);

    const action = taskActions.fetchByLink(linksMock);
    DeepFreeze(action);

    store.dispatch(action);
    const actualActions = store.getActions();
    expect(actualActions).toEqual(expectedActions);
  });
});
