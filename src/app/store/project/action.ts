import { Action, Dispatch, Store } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Link } from "../../models/Link";
import { Project } from "../../models/Project";
import { IProjectService } from "../../services/project/IProject.service";
import { IProjectsState } from "./type";

export enum ProjectTypes {
  FETCH_PROJECTS = 'FETCH_PROJECTS',
  FETCH_CLIENT_PROJECTS = 'FETCH_CLIENT_PROJECTS',
  RECEIVE_PROJECTS = 'RECEIVE_PROJECTS',
  RECEIVE_ERROR = 'RECEIVE_ERROR'
}

export interface IFetchProjectsAction extends Action {
  type: ProjectTypes.FETCH_PROJECTS;
}
export interface IFetchClientProjectsAction extends Action {
  type: ProjectTypes.FETCH_CLIENT_PROJECTS;
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
  | IFetchProjectsAction
  | IFetchClientProjectsAction
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
  public fetchMyProjects(): IFetchProjectsAction {
    this.store.dispatch<any>(this.fetchMyProjectsAsync());
    return {
      type: ProjectTypes.FETCH_PROJECTS
    };
  }
  public fetchClientProjects(links: Link[]): IFetchClientProjectsAction {
    this.store.dispatch<any>(this.fetchClientProjectsAsync(links));
    return {
      type: ProjectTypes.FETCH_CLIENT_PROJECTS
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

  public fetchMyProjectsAsync() {
    return (dispatch: Dispatch<Action>) => {
      return this.projectService.getMyProjects()
        .then((projects) => {
          dispatch(this.receiveProjects(projects));
        })
        .catch((error) => {
          dispatch(this.receiveError(error));
        });
    };
  }

  public fetchClientProjectsAsync(links: Link[]) {
    return (dispatch: Dispatch<Action>) => {
      return this.projectService.get(links)
        .then((projects) => {
          dispatch(this.receiveProjects(projects));
        })
        .catch((error) => {
          dispatch(this.receiveError(error));
        });
    };
  }
}
