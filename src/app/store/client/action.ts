import { Action, Dispatch, Store } from "redux";
import { ThunkAction } from "redux-thunk";
import { IClient } from "../../models/Client";
import { IClientService } from "../../services/client/IClient.service";
import { IClientsState } from "./types";

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

export class ClientActions {
  private store: Store;
  private clientService: IClientService;

  constructor(store: Store, clientService: IClientService, ) {
    this.clientService = clientService;
    this.store = store;
  }

  public fetchClients(): IFetchClientsAction {
    this.store.dispatch<any>(this.fetchClientsAsync());
    return {
      type: ClientTypes.FETCH_CLIENTS,
    };
  }

  public receiveClients(clients: IClient[]): IReceiveClientsAction {
    return {
      type: ClientTypes.RECEIVE_CLIENTS,
      clients
    };
  }

  public receiveError(errorMessage: string): IReceiveErrorAction {
    return {
      type: ClientTypes.RECEIVE_ERROR,
      errorMessage
    };
  }

  public fetchClientsAsync() {
    return (dispatch: Dispatch<Action>) => {
      return this.clientService.getClients()
        .then((clients) => {
          dispatch(this.receiveClients(clients));
        })
        .catch((error) => {
          dispatch(this.receiveError(error));
        });
    };
  }

}
