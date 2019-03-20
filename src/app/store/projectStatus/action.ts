import { Action, Dispatch, Store } from "redux";
import { ThunkAction } from "redux-thunk";
import { IProjectStatusService } from "../../services/projectStatus/IProjectStatus.service";
import { IProjectStatussState } from "./type";
import { ProjectStatus } from "../../models/ProjectStatus";

export enum ProjectStatusTypes {
  FETCH = 'FETCH_PROJECTSTATUSS',
  RECEIVE = 'RECEIVE_PROJECTSTATUSS',
  RECEIVE_ERROR = 'RECEIVE_ERROR_PROJECTSTATUSS',
}

export interface IFetchAction extends Action {
  type: ProjectStatusTypes.FETCH;
}

export interface IReceiveAction extends Action {
  type: ProjectStatusTypes.RECEIVE;
  projectStatuss: ProjectStatus[];
}

export interface IReceiveErrorAction extends Action {
  type: ProjectStatusTypes.RECEIVE_ERROR;
  errorMessage: string;
}

export type ProjectStatusThunkResult<R> = ThunkAction<R, IProjectStatussState, undefined, Action>;

export type ProjectStatussActionTypes =
  | IFetchAction
  | IReceiveAction
  | IReceiveErrorAction;

export default class ProjectStatusActions {
  private store: Store;
  private projectStatusService: IProjectStatusService;
  constructor(store: Store, projectStatusService: IProjectStatusService) {
    this.store = store;
    this.projectStatusService = projectStatusService;
  }

  public fetch(): IFetchAction {
    this.store.dispatch<any>(this.fetchAsync());
    return {
      type: ProjectStatusTypes.FETCH
    };
  }

  public receive(projectStatuss: ProjectStatus[]): IReceiveAction {
    return {
      type: ProjectStatusTypes.RECEIVE,
      projectStatuss
    };
  }

  public receiveError(errorMessage: string): IReceiveErrorAction {
    return {
      type: ProjectStatusTypes.RECEIVE_ERROR,
      errorMessage
    };
  }

  public fetchAsync() {
    return (dispatch: Dispatch<Action>) => {//TODO change service
      return this.projectStatusService.getProjectStatuss()
        .then((projectStatuss) => {
          dispatch(this.receive(projectStatuss));
        })
        .catch((error) => {
          dispatch(this.receiveError(error));
        });
    };
  }
}
