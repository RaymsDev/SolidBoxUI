import { Action, Dispatch, Store } from "redux";
import { ThunkAction } from "redux-thunk";
import { AuthUser } from "../../models/AuthUser";
import { IAuthService } from "../../services/auth/IAuth.Service";
import { IAuthState } from "./type";

export enum AuthTypes {
  AUTHENTICATE = 'AUTHENTICATE',
  DECONNECTION = 'DECONNECTION',
  RECEIVE_AUTH_RESULT = 'RECEIVE_AUTH_RESULT',
  RECEIVE_ERROR = 'RECEIVE_ERROR'
}

export interface IAuthenticateAction extends Action {
  type: AuthTypes.AUTHENTICATE;
}

export interface IDeconnectionAction extends Action {
  type: AuthTypes.DECONNECTION;
}

export interface IReceiveAuthResultAction extends Action {
  type: AuthTypes.RECEIVE_AUTH_RESULT;
  user: AuthUser;
}

export interface IReceiveErrorAction extends Action {
  type: AuthTypes.RECEIVE_ERROR;
  errorMessage: string;
}

export type AuthThunkResult<R> = ThunkAction<R, IAuthState, undefined, Action>;

export type AuthActionTypes =
  | IAuthenticateAction
  | IDeconnectionAction
  | IReceiveAuthResultAction
  | IReceiveErrorAction;

export default class AuthActions {
  private store: Store;
  private authService: IAuthService;

  constructor(store: Store, authService: IAuthService) {
    this.store = store;
    this.authService = authService;
  }

  public authenticate(): IAuthenticateAction {
    this.login();
    return {
      type: AuthTypes.AUTHENTICATE
    };
  }
  public deconnection(): IDeconnectionAction {
    this.logout();
    return {
      type: AuthTypes.DECONNECTION
    };
  }

  public receiveAuthResult(user: AuthUser): IReceiveAuthResultAction {
    return {
      type: AuthTypes.RECEIVE_AUTH_RESULT,
      user
    };
  }

  public receiveError(errorMessage: string): IReceiveErrorAction {
    return {
      type: AuthTypes.RECEIVE_ERROR,
      errorMessage
    };
  }

  public handleCallback() {
    return (dispatch: Dispatch<Action>) => {
      return this.authService.HandleCallback()
        .then((user) => {
          dispatch(this.receiveAuthResult(user));
        })
        .catch((error) => {
          dispatch(this.receiveError(error));
        });

    };
  }

  private login(): void {
    this.authService.Login();
  }
  private logout(): void {
    this.authService.Logout();
  }
}
