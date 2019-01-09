import { AuthUser } from "../../models/AuthUser";

export interface IAuthState {
  user: AuthUser;
  isAuthenticated: boolean;
  isFetching: boolean;
  isError: boolean;
  errorMessage: string;
}
