import { IListNormalized } from '../../models/IListNormalized';
import { IUser } from '../../models/User';

export interface IUsersState {
  users: IListNormalized<IUser>;
  selectedList: IListNormalized<IUser>;
  isFetching: boolean;
  isError: boolean;
  errorMessage: string;
}
