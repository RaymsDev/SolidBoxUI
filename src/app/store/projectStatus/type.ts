import { ProjectStatus } from '../../models/ProjectStatus';

export interface IProjectStatusListState {
  projectStatusList: ProjectStatus[];
  isFetching: boolean;
  isError: boolean;
  errorMessage: string;
}
