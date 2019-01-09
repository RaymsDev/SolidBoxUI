
import { AuthActionTypes, AuthTypes } from "./action";
import { IAuthState } from "./type";

const initialState: IAuthState = {
  user: null,
  errorMessage: null,
  isError: false,
  isFetching: false,
  isAuthenticated: false
};

export const authReducer = (state: IAuthState = initialState, action: AuthActionTypes): IAuthState => {
  switch (action.type) {
    case AuthTypes.AUTHENTICATE:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isFetching: true,
        isError: false,
        errorMessage: null
      };
    case AuthTypes.RECEIVE_AUTH_RESULT:
      return {
        ...state,
        user: action.user,
        isAuthenticated: true,
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
