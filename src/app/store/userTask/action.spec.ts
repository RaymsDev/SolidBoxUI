import * as DeepFreeze from 'deep-freeze';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ILink } from '../../models/Link';
import { LinkRelations } from '../../models/LinkRelations';
import userTaskService, {
  UserTaskListMock,
} from '../../services/userTask/userTaskFake.service';
import UserTaskActions, { UserTasksActionTypes } from './action';
import { IUserTasksState } from './type';

const initialState: IUserTasksState = {
  userTasks: {
    idList: [],
    entities: {},
  },
  isError: false,
  isFetching: false,
  errorMessage: '',
};

const linksMock: ILink[] = [
  {
    rel: LinkRelations.users,
    method: 'GET',
    url: '/API/users',
  },
  {
    rel: LinkRelations.userTasks,
    method: 'GET',
    url: '/API/userTasks',
  },
];

const middlewares = [thunk];
const mockStore = configureMockStore<IUserTasksState>(middlewares);

describe('UserTask Action', async () => {
  test('Fetch UserTask Async', () => {
    const store = mockStore(initialState);
    const userTaskActions = new UserTaskActions(store, userTaskService);
    const expectedActions: UserTasksActionTypes[] = [
      userTaskActions.receive(UserTaskListMock),
    ];

    DeepFreeze(expectedActions);

    const action = userTaskActions.fetchAsync();

    DeepFreeze(action);

    return store.dispatch<any>(action).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('Fetch UserTask by link Async', () => {
    const store = mockStore(initialState);
    const userTaskActions = new UserTaskActions(store, userTaskService);
    const expectedActions: UserTasksActionTypes[] = [
      userTaskActions.receive(UserTaskListMock),
    ];

    DeepFreeze(expectedActions);

    const action = userTaskActions.fetchByLinkAsync(linksMock);

    DeepFreeze(action);

    return store.dispatch<any>(action).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('Fetch UserTasks ', () => {
    const store = mockStore(initialState);
    const userTaskActions = new UserTaskActions(store, userTaskService);

    const expectedActions: UserTasksActionTypes[] = [userTaskActions.fetch()];
    DeepFreeze(expectedActions);

    const action = userTaskActions.fetch();
    DeepFreeze(action);

    store.dispatch(action);
    const actualActions = store.getActions();
    expect(actualActions).toEqual(expectedActions);
  });

  test('Fetch UserTasks ', () => {
    const store = mockStore(initialState);
    const userTaskActions = new UserTaskActions(store, userTaskService);

    const expectedActions: UserTasksActionTypes[] = [
      userTaskActions.fetchByLink(linksMock),
    ];
    DeepFreeze(expectedActions);

    const action = userTaskActions.fetchByLink(linksMock);
    DeepFreeze(action);

    store.dispatch(action);
    const actualActions = store.getActions();
    expect(actualActions).toEqual(expectedActions);
  });
});
