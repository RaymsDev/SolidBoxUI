import { ProjectStatus } from "../../models/ProjectStatus";

export interface IProjectStatussState {
  projectStatuss: ProjectStatus[];
  isFetching: boolean;
  isError: boolean;
  errorMessage: string;
}
