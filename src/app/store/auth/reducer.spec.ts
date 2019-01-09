import * as DeepFreeze from 'deep-freeze';
import { fakeUser } from '../../services/auth/authFake.service';
import { AuthTypes, IAuthenticateAction, IReceiveAuthResultAction, IReceiveErrorAction } from "./action";
import { authReducer } from "./reducer";
import { IAuthState } from "./type";

const initialState: IAuthState = {
  user: null,
  errorMessage: null,
  isError: false,
  isFetching: false,
  isAuthenticated: false
};

const errorMessage = 'error message';

describe('Auth Reducer', () => {
  test('Is authenticating', () => {
    const stateBefore = initialState;
    DeepFreeze(stateBefore);
    const action: IAuthenticateAction = {
      type: AuthTypes.AUTHENTICATE
    };
    DeepFreeze(action);

    const stateAfter: IAuthState = {
      ...initialState,
      isFetching: true
    };
    DeepFreeze(stateAfter);

    expect(stateAfter).toEqual(authReducer(stateBefore, action));
  });
  test('Receive Auth token', () => {
    const stateBefore = initialState;
    DeepFreeze(stateBefore);
    const action: IReceiveAuthResultAction = {
      type: AuthTypes.RECEIVE_AUTH_RESULT,
      user: fakeUser
    };
    DeepFreeze(action);

    const stateAfter: IAuthState = {
      ...initialState,
      isFetching: false,
      isAuthenticated: true,
      user: fakeUser
    };
    DeepFreeze(stateAfter);

    expect(stateAfter).toEqual(authReducer(stateBefore, action));
  });
  test('Receive error', () => {
    const stateBefore = initialState;
    DeepFreeze(stateBefore);
    const action: IReceiveErrorAction = {
      type: AuthTypes.RECEIVE_ERROR,
      errorMessage
    };
    DeepFreeze(action);
    const stateAfter: IAuthState = {
      ...initialState,
      isError: true,
      isFetching: false,
      errorMessage
    };
    DeepFreeze(stateAfter);

    expect(stateAfter).toEqual(authReducer(stateBefore, action));
  });
});
