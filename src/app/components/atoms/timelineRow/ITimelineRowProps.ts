import { Moment } from 'moment';
import { IListNormalized } from '../../../models/IListNormalized';
import { IUser } from '../../../models/User';

export interface ITimelineRowProps {
  days: Moment[];
  user: IUser;
  userTaskList: IListNormalized<any>;
}
