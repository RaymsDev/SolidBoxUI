import { Action, Dispatch, Store } from "redux";
import { ThunkAction } from "redux-thunk";
import { User } from "../../models/User";
import { IUserService } from "../../services/user/IUser.service";
import { IUsersState } from "./type";

export enum UserTypes {
  FETCH = 'FETCH_USER',
  RECEIVE = 'RECEIVE_USER',
  RECEIVE_ERROR = 'RECEIVE_ERROR_USER',
}

export interface IFetchAction extends Action {
  type: UserTypes.FETCH;
}

export interface IReceiveAction extends Action {
  type: UserTypes.RECEIVE;
  users: User[];
}

export interface IReceiveErrorAction extends Action {
  type: UserTypes.RECEIVE_ERROR;
  errorMessage: string;
}

export type UserThunkResult<R> = ThunkAction<R, IUsersState, undefined, Action>;

export type UsersActionTypes =
  | IFetchAction
  | IReceiveAction
  | IReceiveErrorAction;

export default class UserActions {
  private store: Store;
  private userService: IUserService;
  constructor(store: Store, userService: IUserService) {
    this.store = store;
    this.userService = userService;
  }

  public fetch(): IFetchAction {
    this.store.dispatch<any>(this.fetchAsync());
    return {
      type: UserTypes.FETCH
    };
  }

  public receive(users: User[]): IReceiveAction {
    return {
      type: UserTypes.RECEIVE,
      users
    };
  }

  public receiveError(errorMessage: string): IReceiveErrorAction {
    return {
      type: UserTypes.RECEIVE_ERROR,
      errorMessage
    };
  }

  public fetchAsync() {
    return (dispatch: Dispatch<Action>) => {
      return this.userService.getUsers()
        .then((users) => {
          dispatch(this.receive(users));
        })
        .catch((error) => {
          dispatch(this.receiveError(error));
        });
    };
  }
}
