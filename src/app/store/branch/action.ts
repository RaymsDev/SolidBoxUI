import { Action, Dispatch, Store } from "redux";
import { ThunkAction } from "redux-thunk";
import { Branch } from "../../models/Branch";
import { IBranchService } from "../../services/branch/IBranch.service";
import { IBranchsState } from "./type";

export enum BranchTypes {
  FETCH = 'FETCH_BRANCH',
  RECEIVE = 'RECEIVE_BRANCH',
  RECEIVE_ERROR = 'RECEIVE_ERROR_BRANCH',
}

export interface IFetchAction extends Action {
  type: BranchTypes.FETCH;
}

export interface IReceiveAction extends Action {
  type: BranchTypes.RECEIVE;
  branchs: Branch[];
}

export interface IReceiveErrorAction extends Action {
  type: BranchTypes.RECEIVE_ERROR;
  errorMessage: string;
}

export type BranchThunkResult<R> = ThunkAction<R, IBranchsState, undefined, Action>;

export type BranchsActionTypes =
  | IFetchAction
  | IReceiveAction
  | IReceiveErrorAction;

export default class BranchActions {
  private store: Store;
  private branchService: IBranchService;
  constructor(store: Store, branchService: IBranchService) {
    this.store = store;
    this.branchService = branchService;
  }

  public fetch(): IFetchAction {
    this.store.dispatch<any>(this.fetchAsync());
    return {
      type: BranchTypes.FETCH
    };
  }

  public receive(branchs: Branch[]): IReceiveAction {
    return {
      type: BranchTypes.RECEIVE,
      branchs
    };
  }

  public receiveError(errorMessage: string): IReceiveErrorAction {
    return {
      type: BranchTypes.RECEIVE_ERROR,
      errorMessage
    };
  }

  public fetchAsync() {
    return (dispatch: Dispatch<Action>) => {
      return this.branchService.list()
        .then((branchs) => {
          dispatch(this.receive(branchs));
        })
        .catch((error) => {
          dispatch(this.receiveError(error));
        });
    };
  }
}
