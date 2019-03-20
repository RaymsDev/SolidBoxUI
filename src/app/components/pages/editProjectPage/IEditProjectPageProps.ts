import { Project } from "../../../models/Project";
import { ProjectMode } from "../../../models/ProjectMode";
import { ProjectStatus } from "../../../models/ProjectStatus";

export interface IEditProjectPageProps {
  newProject: Project;
  listProjectMode: Array<ProjectMode>;
  listProjectStatus: Array<ProjectStatus>;
  onChangeProperty: (property: string) => (newValue: any) => void;
}
