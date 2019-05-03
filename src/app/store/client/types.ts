import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { IClient } from "../../models/Client";

export interface IClientsState {
  clients: IClient[];
  isFetching: boolean;
  isError: boolean;
  errorMessage: string;
}
