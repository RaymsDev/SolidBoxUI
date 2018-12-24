import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { Project } from "../../models/Project";

export interface IProjectsState {
  projects: Project[];
  isFetching: boolean;
  isError: boolean;
  errorMessage: string;
}

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
