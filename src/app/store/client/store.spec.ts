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

describe('Client reducer', () => {
  test('Fetch Clients', async () => {
    const beforeState = initialState;
    DeepFreeze(beforeState);
    const action: IFetchClientsAction = {
      type: ClientTypes.FETCH_CLIENTS
    };
    DeepFreeze(action);
    const afterState: IClientsState = {
      ...initialState,
      isFetching: true
    };
    expect(clientsReducer(beforeState, action)).toEqual(afterState);

  });
  test('Receive Clients', async () => {
    const beforeState = {
      ...initialState,
      isFetching: true
    };
    DeepFreeze(beforeState);
    const action: IReceiveClientsAction = {
      type: ClientTypes.RECEIVE_CLIENTS,
      clients: clientsListMock
    };
    DeepFreeze(action);
    const afterState: IClientsState = {
      ...initialState,
      clients: clientsListMock,
    };
    expect(clientsReducer(beforeState, action)).toEqual(afterState);

  });
  test('Receive Error', async () => {
    const beforeState: IClientsState = {
      ...initialState,
      isFetching: true,
    };
    DeepFreeze(beforeState);
    const action: IReceiveErrorAction = {
      type: ClientTypes.RECEIVE_ERROR,
      errorMessage: 'error'
    };
    DeepFreeze(action);
    const afterState: IClientsState = {
      ...initialState,
      isError: true,
      errorMessage: 'error'
    };
    expect(clientsReducer(beforeState, action)).toEqual(afterState);

  });
});
