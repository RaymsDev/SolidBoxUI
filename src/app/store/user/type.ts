import { User } from "../../models/User";

export interface IUsersState {
  users: User[];
  isFetching: boolean;
  isError: boolean;
  errorMessage: string;
}
