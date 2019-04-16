import { IClient } from '../../../models/Client';
import { Project } from '../../../models/Project';
import { IProjectStatus, ProjectStatus } from '../../../models/ProjectStatus';
import { ITask, ITasksNormalized } from '../../../models/Task';

export interface IPlanningPageProps {
  clientList: IClient[];
  clientsIsFetching: boolean;
  projectList: Project[];
  projectsIsFetching: boolean;
  onClientSelected: (client: IClient) => void;
  onProjectSelected: (project: Project) => void;
  projectStatusList: IProjectStatus[];
  projectStatusIsFetching: boolean;
  onProjectStatusSelect: (projectStatus: ProjectStatus) => void;
  taskList: ITasksNormalized;
  tasksIsFetching: boolean;
  onTaskSelected: (task: ITask) => void;
}
