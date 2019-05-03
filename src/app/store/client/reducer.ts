import { IClient } from "../../models/Client";
import { ClientsActionTypes, ClientTypes } from "./action";
import { IClientsState } from "./types";

const initialState: IClientsState = {
  clients: new Array<IClient>(),
  isFetching: false,
  isError: false,
  errorMessage: ''
};

export const clientsReducer = (state: IClientsState = initialState, action: ClientsActionTypes): IClientsState => {
  switch (action.type) {
    case ClientTypes.FETCH_CLIENTS:
      return {
        ...state,
        isFetching: true,
        isError: false,
        errorMessage: ''
      };
    case ClientTypes.RECEIVE_CLIENTS:
      return {
        ...state,
        clients: [
          ...action.clients
        ],
        isFetching: false,
        isError: false,
        errorMessage: ''
      };
    case ClientTypes.RECEIVE_ERROR:
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
