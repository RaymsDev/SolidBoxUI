import { ProjectStatus } from '../../models/ProjectStatus';

export interface IProjectStatusService {
  getProjectStatusList(): Promise<ProjectStatus[]>;
}
