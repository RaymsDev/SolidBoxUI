import { AuthUser } from "../../models/AuthUser";

export interface IAuthService {
  AccessToken: string;
  IdToken: string;
  IsAuthenticated: boolean;
  Login: () => void;
  Logout: () => void;
  HandleCallback: () => Promise<AuthUser>;
}
