import { Action, Dispatch, Store } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Branch } from '../../models/Branch';
import { ILink } from '../../models/Link';
import { IBranchService } from '../../services/branch/IBranch.service';
import { IBranchesState } from './type';

export enum BranchTypes {
  FETCH_BRANCH = 'FETCH_BRANCH',
  FETCH_BRANCH_BY_LINK = 'FETCH_BRANCH_BY_LINK',
  RECEIVE = 'RECEIVE_BRANCH',
  RECEIVE_ERROR = 'RECEIVE_ERROR_BRANCH',
}

export interface IFetchAction extends Action {
  type: BranchTypes.FETCH_BRANCH;
}

export interface IFetchByLinkAction extends Action {
  type: BranchTypes.FETCH_BRANCH_BY_LINK;
}

export interface IReceiveAction extends Action {
  type: BranchTypes.RECEIVE;
  branches: Branch[];
}

export interface IReceiveErrorAction extends Action {
  type: BranchTypes.RECEIVE_ERROR;
  errorMessage: string;
}

export type BranchThunkResult<R> = ThunkAction<
  R,
  IBranchesState,
  undefined,
  Action
>;

export type BranchesActionTypes =
  | IFetchAction
  | IFetchByLinkAction
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
      type: BranchTypes.FETCH_BRANCH,
    };
  }

  public fetchByLink(links: ILink[]): IFetchByLinkAction {
    this.store.dispatch<any>(this.fetchByLinkAsync(links));
    return {
      type: BranchTypes.FETCH_BRANCH_BY_LINK,
    };
  }

  public receive(branches: Branch[]): IReceiveAction {
    return {
      type: BranchTypes.RECEIVE,
      branches,
    };
  }

  public receiveError(errorMessage: string): IReceiveErrorAction {
    return {
      type: BranchTypes.RECEIVE_ERROR,
      errorMessage,
    };
  }

  public fetchAsync() {
    return (dispatch: Dispatch<Action>) => {
      return this.branchService
        .list()
        .then(branches => {
          dispatch(this.receive(branches));
        })
        .catch(error => {
          dispatch(this.receiveError(error));
        });
    };
  }

  public fetchByLinkAsync(links: ILink[]) {
    return (dispatch: Dispatch<Action>) => {
      return this.branchService
        .get(links)
        .then(branches => {
          dispatch(this.receive(branches));
        })
        .catch(error => {
          dispatch(this.receiveError(error));
        });
    };
  }
}
