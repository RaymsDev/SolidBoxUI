import { Agency } from "../../../models/Agency";
import { Branch } from "../../../models/Branch";
import { Client } from "../../../models/Client";
import { Project } from "../../../models/Project";
import { ProjectMode } from "../../../models/ProjectMode";
import { ProjectStatus } from "../../../models/ProjectStatus";
import { Team } from "../../../models/Team";
import { User } from "../../../models/User";

export interface IEditProjectPageProps {
  newProject: Project;
  listProjectMode: ProjectMode[];
  listProjectStatus: ProjectStatus[];
  listUser: User[];
  listAgency: Agency[];
  listBranch: Branch[];
  listTeam: Team[];
  listClient: Client[];
  listProject: Project[];
  onChangeProperty: (property: string) => (newValue: any) => void;
  onDelete: () => void;
  onSave: () => void;
  onCreate: () => void;
}
