import { IAgency } from '../../../models/Agency';
import { IBranch } from '../../../models/Branch';
import { IClient } from '../../../models/Client';
import { IListNormalized } from '../../../models/IListNormalized';
import { Project } from '../../../models/Project';
import { IProjectStatus, ProjectStatus } from '../../../models/ProjectStatus';
import { ITask } from '../../../models/Task';
import { ITeam } from '../../../models/Team';
import { IUser } from '../../../models/User';
import { IUserTask } from '../../../models/UserTask';

export interface IPlanningPageProps {
  // Client
  clientList: IClient[];
  clientsIsFetching: boolean;
  onClientSelected: (client: IClient) => void;
  // Project
  projectList: Project[];
  projectsIsFetching: boolean;
  onProjectSelected: (project: Project) => void;
  // Project Status
  projectStatusList: IProjectStatus[];
  projectStatusIsFetching: boolean;
  onProjectStatusSelect: (projectStatus: ProjectStatus) => void;
  // Task
  taskList: IListNormalized<ITask>;
  tasksIsFetching: boolean;
  onTaskSelected: (task: ITask) => void;
  // Agency
  agencyList: IListNormalized<IAgency>;
  agenciesIsFetching: boolean;
  onAgencySelected: (agency: IAgency) => void;
  // Branch
  branchList: IListNormalized<IBranch>;
  branchesIsFetching: boolean;
  onBranchSelected: (branch: IBranch) => void;
  // Team
  teamList: IListNormalized<ITeam>;
  teamsIsFetching: boolean;
  onTeamSelected: (team: ITeam) => void;
  // User
  userList: IListNormalized<IUser>;
  userSelectedList: IListNormalized<IUser>;
  usersIsFetching: boolean;
  onUsersSelected: (users: IUser[]) => void;

  userTaskList: IListNormalized<IUserTask>;
  userTasksIsFetching: boolean;
}
