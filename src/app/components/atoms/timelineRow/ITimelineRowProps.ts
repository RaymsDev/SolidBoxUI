import { Moment } from 'moment';
import { IListNormalized } from '../../../models/IListNormalized';
import { ITask } from '../../../models/Task';
import { IUser } from '../../../models/User';
import { IUserTask } from '../../../models/UserTask';

export interface ITimelineRowProps {
  days: Moment[];
  user: IUser;
  userTaskList: IUserTask[];
  taskList: IListNormalized<ITask>;
}
