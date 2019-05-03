import { IListNormalized } from '../../models/IListNormalized';
import { IUserTask } from '../../models/UserTask';

export interface IUserTasksState {
  userTasks: IListNormalized<IUserTask>;
  isFetching: boolean;
  isError: boolean;
  errorMessage: string;
}
