import { AuthResult } from "../../models/AuthResult";
import { IAuthService } from "./IAuth.Service";

const delay = 10;
export const fakeAuthResult: AuthResult = {
  user: {
    access_token: "token",
    expired: false,
    expires_at: 5156561,
    expires_in: 55555,
    id_token: "id_token",
    token_type: "token_type",
    profile: {},
    state: "state",
    scope: "scope",
    scopes: ["scopes"],
    session_state: "session_state",
    toStorageString: () => "toString",
  },
  isAuthenticated: true
};
class AuthFakeService implements IAuthService {
  public get AccessToken(): string {
    return this.accessToken;
  }

  public get IdToken(): string {
    return this.idToken;
  }

  public get IsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
  private isAuthenticated: boolean;
  private accessToken: string;
  private idToken: string;
  constructor() {
    this.resetState();
  }

  public CheckAuthentication() {
    const promise = new Promise<AuthResult>((resolve, reject) => {
      setTimeout(() => {
        this.isAuthenticated = true;
        this.accessToken = "access_token";
        this.idToken = "id_token";
        resolve(fakeAuthResult);
      }, delay);
    });
    return promise;
  }

  public Login() {
    setTimeout(() => {
      this.isAuthenticated = true;
      this.accessToken = "access_token";
      this.idToken = "id_token";
    }, delay);
  }

  public Logout() {
    setTimeout(() => {
      this.resetState();
    }, delay);
  }

  public HandleCallback() {
    const promise = new Promise<AuthResult>((resolve, reject) => {
      resolve(fakeAuthResult);
    });
    return promise;
  }

  private resetState() {
    this.isAuthenticated = false;
    this.accessToken = null;
    this.idToken = null;
  }
}

const authFakeService = new AuthFakeService();

export default authFakeService;
