import { IListNormalized } from '../../../models/IListNormalized';
import { ITask } from '../../../models/Task';
import { IUser } from '../../../models/User';
import { IUserTask } from '../../../models/UserTask';

export interface ITimelineProps {
  userList: IListNormalized<IUser>;
  userTaskList: IListNormalized<IUserTask>;
  taskList: IListNormalized<ITask>;
}
