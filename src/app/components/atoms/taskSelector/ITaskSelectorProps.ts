import { IListNormalized } from '../../../models/IListNormalized';
import { IProject } from '../../../models/Project';
import { ITask } from '../../../models/Task';

export interface ITaskSelectorProps {
  projectList: IProject[];
  projectIsFetching: boolean;
  onProjectSelected: (project: IProject) => void;
  taskList: IListNormalized<ITask>;
  taskIsFetching: boolean;
  onTaskSelected: (task: ITask) => void;
}
