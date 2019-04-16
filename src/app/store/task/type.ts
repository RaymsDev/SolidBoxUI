import { ITask, ITasksNormalized } from '../../models/Task';

export interface ITasksState {
  tasks: ITasksNormalized;
  isFetching: boolean;
  isError: boolean;
  errorMessage: string;
}
