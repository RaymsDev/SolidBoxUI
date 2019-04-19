import { UsersActionTypes, UserTypes } from "./action";
import { IUsersState } from "./type";

const initialState: IUsersState = {
  users: [],
  isFetching: false,
  isError: false,
  errorMessage: '',
};

export const userReducer = (state: IUsersState = initialState, action: UsersActionTypes): IUsersState => {
  switch (action.type) {
    case UserTypes.FETCH:
      return {
        ...state,
        isFetching: true,
        isError: false,
        errorMessage: ''
      };
    case UserTypes.RECEIVE:
      return {
        ...state,
        users: action.users,
        isFetching: false,
        isError: false,
        errorMessage: ''
      };
    case UserTypes.RECEIVE_ERROR:
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
