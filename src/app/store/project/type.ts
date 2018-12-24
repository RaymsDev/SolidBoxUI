import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { Project } from "../../models/Project";

export interface IProjectsState {
  projects: Project[];
  isFetching: boolean;
  isError: boolean;
  errorMessage: string;
}
