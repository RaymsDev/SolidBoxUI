import * as DeepFreeze from 'deep-freeze';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ILink } from '../../models/Link';
import { LinkRelations } from '../../models/LinkRelations';
import userTaskService from '../../services/userTask/userTaskFake.service';
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
  test('Fetch UserTasks ', () => {
    const store = mockStore(initialState);
    const userTaskActions = new UserTaskActions(store, userTaskService);

    const expectedActions: UserTasksActionTypes[] = [userTaskActions.Fetch()];
    DeepFreeze(expectedActions);

    const action = userTaskActions.Fetch();
    DeepFreeze(action);

    store.dispatch(action);
    const actualActions = store.getActions();
    expect(actualActions).toEqual(expectedActions);
  });

  test('Fetch UserTasks ', () => {
    const store = mockStore(initialState);
    const userTaskActions = new UserTaskActions(store, userTaskService);

    const expectedActions: UserTasksActionTypes[] = [
      userTaskActions.FetchByLink(linksMock),
    ];
    DeepFreeze(expectedActions);

    const action = userTaskActions.FetchByLink(linksMock);
    DeepFreeze(action);

    store.dispatch(action);
    const actualActions = store.getActions();
    expect(actualActions).toEqual(expectedActions);
  });
});
