import { Project } from "../../models/Project";

export interface IProjectsState {
  projects: Project[];
  isFetching: boolean;
  isError: boolean;
  errorMessage: string;
}
