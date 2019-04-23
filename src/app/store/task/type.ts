import { IListNormalized } from '../../models/IListNormalized';
import { ITask } from '../../models/Task';

export interface ITasksState {
  tasks: IListNormalized<ITask>;
  isFetching: boolean;
  isError: boolean;
  errorMessage: string;
}
