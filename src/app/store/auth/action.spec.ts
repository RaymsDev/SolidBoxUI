import * as DeepFreeze from 'deep-freeze';
import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import authFakeService, { fakeUser } from '../../services/auth/authFake.service';
import AuthActions, { AuthActionTypes } from './action';
import { IAuthState } from './type';

const middlewares = [thunk];
const mockStore = configureMockStore<IAuthState>(middlewares);

const initialState: IAuthState = {
  user: null,
  errorMessage: null,
  isError: false,
  isFetching: false,
  isAuthenticated: false
};

describe('Auth Action', () => {
  test('handlecallback Async', async () => {
    const store = mockStore(initialState);
    const authActions = new AuthActions(store, authFakeService);
    const expectedActions: AuthActionTypes[] = [
      authActions.receiveAuthResult(fakeUser)
    ];

    DeepFreeze(expectedActions);

    const action = authActions.handleCallback();

    DeepFreeze(action);

    return store.dispatch<any>(action)
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  test('Authenticate', async () => {
    const store = mockStore(initialState);
    const authActions = new AuthActions(store, authFakeService);

    const expectedActions: any = [
      authActions.authenticate()
    ];
    DeepFreeze(expectedActions);

    const action = authActions.authenticate();
    DeepFreeze(action);

    store.dispatch(action);
    const actualActions = store.getActions();
    expect(actualActions).toEqual(expectedActions);
  });
});
