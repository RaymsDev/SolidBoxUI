import { Action, Dispatch, Store } from "redux";
import { ThunkAction } from "redux-thunk";
import { IProjectModeService } from "../../services/projectMode/IProjectMode.service";
import { IProjectModesState } from "./type";
import { ProjectMode } from "../../models/ProjectMode";

export enum ProjectModeTypes {
  FETCH = 'FETCH_PROJECTMODES',
  RECEIVE = 'RECEIVE_PROJECTMODES',
  RECEIVE_ERROR = 'RECEIVE_ERROR_PROJECTMODES',
}

export interface IFetchAction extends Action {
  type: ProjectModeTypes.FETCH;
}

export interface IReceiveAction extends Action {
  type: ProjectModeTypes.RECEIVE;
  projectModes: ProjectMode[];
}

export interface IReceiveErrorAction extends Action {
  type: ProjectModeTypes.RECEIVE_ERROR;
  errorMessage: string;
}

export type ProjectModeThunkResult<R> = ThunkAction<R, IProjectModesState, undefined, Action>;

export type ProjectModesActionTypes =
  | IFetchAction
  | IReceiveAction
  | IReceiveErrorAction;

export default class ProjectModeActions {
  private store: Store;
  private projectModeService: IProjectModeService;
  constructor(store: Store, projectModeService: IProjectModeService) {
    this.store = store;
    this.projectModeService = projectModeService;
  }

  public fetch(): IFetchAction {
    this.store.dispatch<any>(this.fetchAsync());
    return {
      type: ProjectModeTypes.FETCH
    };
  }

  public receive(projectModes: ProjectMode[]): IReceiveAction {
    return {
      type: ProjectModeTypes.RECEIVE,
      projectModes
    };
  }

  public receiveError(errorMessage: string): IReceiveErrorAction {
    return {
      type: ProjectModeTypes.RECEIVE_ERROR,
      errorMessage
    };
  }

  public fetchAsync() {
    return (dispatch: Dispatch<Action>) => {//TODO change service
      return this.projectModeService.getProjectModes()
        .then((projectModes) => {
          dispatch(this.receive(projectModes));
        })
        .catch((error) => {
          dispatch(this.receiveError(error));
        });
    };
  }
}
