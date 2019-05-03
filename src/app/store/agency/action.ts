import { Action, Dispatch, Store } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Agency } from '../../models/Agency';
import { IAgencyService } from '../../services/agency/IAgency.service';
import { IAgencysState } from './type';

export enum AgencyTypes {
  FETCH = 'FETCH_AGENCY',
  RECEIVE = 'RECEIVE_AGENCY',
  RECEIVE_ERROR = 'RECEIVE_ERROR_AGENCY',
}

export interface IFetchAction extends Action {
  type: AgencyTypes.FETCH;
}

export interface IReceiveAction extends Action {
  type: AgencyTypes.RECEIVE;
  agencies: Agency[];
}

export interface IReceiveErrorAction extends Action {
  type: AgencyTypes.RECEIVE_ERROR;
  errorMessage: string;
}

export type AgencyThunkResult<R> = ThunkAction<
  R,
  IAgencysState,
  undefined,
  Action
>;

export type AgencysActionTypes =
  | IFetchAction
  | IReceiveAction
  | IReceiveErrorAction;

export default class AgencyActions {
  private store: Store;
  private agencyService: IAgencyService;
  constructor(store: Store, agencyService: IAgencyService) {
    this.store = store;
    this.agencyService = agencyService;
  }

  public fetch(): IFetchAction {
    this.store.dispatch<any>(this.fetchAsync());
    return {
      type: AgencyTypes.FETCH,
    };
  }

  public receive(agencies: Agency[]): IReceiveAction {
    return {
      type: AgencyTypes.RECEIVE,
      agencies,
    };
  }

  public receiveError(errorMessage: string): IReceiveErrorAction {
    return {
      type: AgencyTypes.RECEIVE_ERROR,
      errorMessage,
    };
  }

  public fetchAsync() {
    return (dispatch: Dispatch<Action>) => {
      return this.agencyService
        .list()
        .then(agencies => {
          dispatch(this.receive(agencies));
        })
        .catch(error => {
          dispatch(this.receiveError(error));
        });
    };
  }
}
