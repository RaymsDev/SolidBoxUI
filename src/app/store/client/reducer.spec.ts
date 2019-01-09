import * as DeepFreeze from 'deep-freeze';
import { clientsListMock } from "../../services/client/clientFake.service";
import { ClientTypes, IFetchClientsAction, IReceiveClientsAction, IReceiveErrorAction } from './action';
import { clientsReducer } from "./reducer";
import { IClientsState } from './types';

const initialState: IClientsState = {
  clients: [],
  isError: false,
  isFetching: false,
  errorMessage: ''
};

describe('Client reducer', () => {
  test('Fetch Clients', () => {
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
  test('Receive Clients', () => {
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
  test('Receive Error', () => {
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
