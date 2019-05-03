import * as DeepFreeze from 'deep-freeze';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import clientFakeService, { clientsListMock } from '../../services/client/clientFake.service';
import { ClientActions, ClientsActionTypes } from './action';
import { IClientsState } from './types';

const initialState: IClientsState = {
  clients: [],
  isError: false,
  isFetching: false,
  errorMessage: ''
};

const middlewares = [thunk];
const mockStore = configureMockStore<IClientsState>(middlewares);

describe('Client Action', () => {
  test('Get Clients', async () => {
    const store = mockStore(initialState);
    const clientActions = new ClientActions(store, clientFakeService);
    const expectedActions: ClientsActionTypes[] = [
      clientActions.receiveClients(clientsListMock),
    ];

    const async = clientActions.fetchClientsAsync();
    DeepFreeze(async);

    return store.dispatch<any>(async)
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  test('Fetch Clients', () => {
    const store = mockStore(initialState);
    const clientActions = new ClientActions(store, clientFakeService);
    const expectedActions: ClientsActionTypes[] = [
      clientActions.fetchClients(),
    ];

    const action = clientActions.fetchClients();
    DeepFreeze(action);

    store.dispatch(action);
    const actualActions = store.getActions();
    expect(actualActions).toEqual(expectedActions);
  });
});
