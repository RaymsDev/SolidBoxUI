import { IListNormalized } from '../../../models/IListNormalized';
import { IUser } from '../../../models/User';

export interface ITimelineProps {
  userList: IListNormalized<IUser>;
  userTaskList: IListNormalized<any>;
}
