import { ITask } from '../../models/Task';

export interface ITasksState {
  tasks: ITask[];
  isFetching: boolean;
  isError: boolean;
  errorMessage: string;
}
