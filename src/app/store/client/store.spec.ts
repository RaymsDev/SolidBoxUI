import * as DeepFreeze from 'deep-freeze';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import clientFakeService, { clientsListMock } from '../../services/client/clientFake.service';
import { ClientActions } from './action';
import { clientsReducer } from './reducer';
import { ClientsActionTypes, ClientTypes, IClientsState, IFetchClientsAction, IReceiveClientsAction, IReceiveErrorAction } from "./types";

const initialState: IClientsState = {
  clients: [],
  isError: false,
  isFetching: false,
  errorMessage: ''
};

const middlewares = [thunk];
const mockStore = configureMockStore<IClientsState>(middlewares);
const store = mockStore(initialState);

describe('Client Action', () => {
  test('Get Clients', async () => {
    const clientActions = new ClientActions(store, clientFakeService);
    const expectedActions: ClientsActionTypes[] = [
      clientActions.fetchClients(),
      clientActions.receiveClients(clientsListMock)
    ];

    const async = clientActions.fetchClientsAsync();
    DeepFreeze(async);

    return store.dispatch<any>(async)
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
