import { Action, Dispatch, Store } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Project } from "../../models/Project";
import { IProjectService } from "../../services/project/IProject.service";
import { IProjectsState } from "./type";

export enum ProjectTypes {
  FETCH_PROJECTS = 'FETCH_PROJECTS',
  RECEIVE_PROJECTS = 'RECEIVE_PROJECTS',
  RECEIVE_ERROR = 'RECEIVE_ERROR'
}

export interface IFetchProjectsAction extends Action {
  type: ProjectTypes.FETCH_PROJECTS;
}

export interface IReceiveProjectsAction extends Action {
  type: ProjectTypes.RECEIVE_PROJECTS;
  projects: Project[];
}

export interface IReceiveErrorAction extends Action {
  type: ProjectTypes.RECEIVE_ERROR;
  errorMessage: string;
}

export type ProjectThunkResult<R> = ThunkAction<R, IProjectsState, undefined, Action>;

export type ProjectsActionTypes =
  |IFetchProjectsAction
  | IReceiveProjectsAction
  | IReceiveErrorAction;

export default class ProjectActions {
  private store: Store;
  private projectService: IProjectService;
  constructor(store: Store, projectService: IProjectService) {
    this.store = store;
    this.projectService = projectService;
  }

  public fetchProjects(): IFetchProjectsAction {
    this.store.dispatch<any>(this.fetchProjectsAsync());
    return {
      type: ProjectTypes.FETCH_PROJECTS
    };
  }

  public receiveProjects(projects: Project[]): IReceiveProjectsAction {
    return {
      type: ProjectTypes.RECEIVE_PROJECTS,
      projects
    };
  }

  public receiveError(errorMessage: string): IReceiveErrorAction {
    return {
      type: ProjectTypes.RECEIVE_ERROR,
      errorMessage
    };
  }

  public fetchProjectsAsync() {
    return (dispatch: Dispatch<Action>) => {
      return this.projectService.getProjects()
        .then((projects) => {
          dispatch(this.receiveProjects(projects));
        })
        .catch((error) => {
          dispatch(this.receiveError(error));
        });
    };
  }
}
