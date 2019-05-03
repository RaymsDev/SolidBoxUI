import { ProjectMode } from "../../models/ProjectMode";

export interface IProjectModesState {
  projectModes: ProjectMode[];
  isFetching: boolean;
  isError: boolean;
  errorMessage: string;
}
