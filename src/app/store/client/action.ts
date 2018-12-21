import { Action, ActionCreator, Dispatch, Store } from "redux";
import { ThunkAction } from "redux-thunk";
import { IClient } from "../../models/Client";
import { IClientService } from "../../services/client/IClient.service";
import { ClientsActionTypes, ClientTypes, IClientsState, IFetchClientsAction, IReceiveClientsAction, IReceiveErrorAction, ThunkResult } from "./types";

export class ClientActions {
  private store: Store;
  private clientService: IClientService;

  constructor(store: Store, clientService: IClientService, ) {
    this.clientService = clientService;
    this.store = store;
  }

  public fetchClients(): IFetchClientsAction {
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
    // Show Loading
    this.store.dispatch(this.fetchClients());
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
