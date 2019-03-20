import { ProjectStatus } from "../../models/ProjectStatus";

export interface IProjectStatusService {
  getProjectStatuss(): Promise<ProjectStatus[]>;
}
