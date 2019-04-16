import { IProject } from '../../../models/Project';
import { ITask, ITasksNormalized } from '../../../models/Task';

export interface IProjectSelectorProps {
  projectList: IProject[];
  projectIsFetching: boolean;
  onProjectSelected: (project: IProject) => void;
  taskList: ITasksNormalized;
  taskIsFetching: boolean;
  onTaskSelected: (task: ITask) => void;
}
