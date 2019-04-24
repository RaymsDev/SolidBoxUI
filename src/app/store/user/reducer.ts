import { normalize, schema } from 'normalizr';
import { IListNormalized } from '../../models/IListNormalized';
import { IUser } from '../../models/User';
import { UsersActionTypes, UserTypes } from './action';
import { IUsersState } from './type';

const initialState: IUsersState = {
  users: {
    idList: [],
    entities: {},
  },
  isFetching: false,
  isError: false,
  errorMessage: '',
};

const normalizeUsers = (users: IUser[]): IListNormalized<IUser> => {
  const user = new schema.Entity('users');
  const mySchema = { users: [user] };
  const normalizedData = normalize(
    {
      users,
    },
    mySchema,
  );
  return {
    idList: normalizedData.result.users,
    entities: normalizedData.entities.users,
  };
};

const receiveUsers = (
  state: IUsersState = initialState,
  action: UsersActionTypes,
): IUsersState => {
  switch (action.type) {
    case UserTypes.RECEIVE:
      const { entities, idList } = normalizeUsers(action.users);
      return {
        ...state,
        users: {
          idList,
          entities,
        },
        isFetching: false,
        isError: false,
        errorMessage: '',
      };
    default:
      return state;
  }
};

export const userReducer = (
  state: IUsersState = initialState,
  action: UsersActionTypes,
): IUsersState => {
  switch (action.type) {
    case UserTypes.FETCH:
    case UserTypes.FETCH_BY_LINK:
      return {
        ...state,
        isFetching: true,
        isError: false,
        errorMessage: '',
      };
    case UserTypes.RECEIVE:
      return receiveUsers(state, action);
    case UserTypes.RECEIVE_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
