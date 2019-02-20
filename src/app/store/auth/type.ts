import { AuthResult } from "../../models/AuthResult";

export interface IAuthState {
  authResult: AuthResult;
  isFetching: boolean;
  isError: boolean;
  errorMessage: string;
}
