import { AuthResult } from "../../models/AuthResult";

export interface IAuthService {
  AccessToken: string;
  IdToken: string;
  IsAuthenticated: boolean;
  Login: () => void;
  Logout: () => void;
  HandleCallback: () => Promise<AuthResult>;
  CheckAuthentication: () => Promise<AuthResult>;
}
