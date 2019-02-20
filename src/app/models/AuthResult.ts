import { User } from "oidc-client";

export class AuthResult {
  public user: User;
  public isAuthenticated: boolean;
}
