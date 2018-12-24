import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { IClient } from "../../models/Client";

export interface IClientsState {
  clients: IClient[];
  isFetching: boolean;
  isError: boolean;
  errorMessage: string;
}

export enum ClientTypes {
  FETCH_CLIENTS = 'FETCH_CLIENTS',
  RECEIVE_CLIENTS = 'RECEIVE_CLIENTS',
  RECEIVE_ERROR = 'RECEIVE_ERROR'
}

export interface IFetchClientsAction extends Action {
  type: ClientTypes.FETCH_CLIENTS;
}

export interface IReceiveClientsAction extends Action {
  type: ClientTypes.RECEIVE_CLIENTS;
  clients: IClient[];
}

export interface IReceiveErrorAction extends Action {
  type: ClientTypes.RECEIVE_ERROR;
  errorMessage: string;
}

export type ClientThunkResult<R> = ThunkAction<R, IClientsState, undefined, Action>;

export type ClientsActionTypes =
  | IFetchClientsAction
  | IReceiveClientsAction
  | IReceiveErrorAction;
