import { ProjectMode } from "../../models/ProjectMode";

export interface IProjectModeService {
  getProjectModes(): Promise<ProjectMode[]>;
}
