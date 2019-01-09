
import { AuthActionTypes, AuthTypes } from "./action";
import { IAuthState } from "./type";

const initialState: IAuthState = {
  authResult: {
    user: null,
    isAuthenticated: false
  },
  errorMessage: null,
  isError: false,
  isFetching: false,
};

export const authReducer = (state: IAuthState = initialState, action: AuthActionTypes): IAuthState => {
  switch (action.type) {
    case AuthTypes.AUTHENTICATE:
      return {
        ...state,
        authResult: {
          user: null,
          isAuthenticated: false
        },
        isFetching: true,
        isError: false,
        errorMessage: null
      };
    case AuthTypes.CHECK_AUTHENTICATION:
      return {
        ...state,
        isFetching: true,
        isError: false,
        errorMessage: null
      };
    case AuthTypes.RECEIVE_AUTH_RESULT:
      return {
        ...state,
        authResult: action.authResult,
        isFetching: false,
        isError: false,
        errorMessage: null
      };
    case AuthTypes.RECEIVE_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true,
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
};
