import { AuthUser } from "../../models/AuthUser";
import { IAuthService } from "./IAuth.Service";

const delay = 10;
export const fakeUser: AuthUser = {
  access_token: 'token',
  expired: false,
  expires_at: 5156561,
  expires_in: 55555,
  id_token: 'id_token',
  token_type: 'token_type',
  profile: {},
  state: 'state',
  scope: 'scope',
  scopes: ['scopes'],
  session_state: 'session_state',
  toStorageString: () => 'toString'
};
class AuthFakeService implements IAuthService {
  private isAuthenticated: boolean;
  private accessToken: string;
  private idToken: string;
  public get AccessToken(): string {
    return this.accessToken;
  }

  public get IdToken(): string {
    return this.idToken;
  }

  public get IsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  public Login() {
    setTimeout(() => {
      this.isAuthenticated = true;
      this.accessToken = 'access_token';
      this.idToken = 'id_token';
    }, delay);
  }

  public Logout() {
    setTimeout(() => {
      this.isAuthenticated = false;
      this.accessToken = null;
      this.idToken = null;
    }, delay);
  }

  public HandleCallback() {
    const promise = new Promise<AuthUser>((resolve, reject) => {
      resolve(fakeUser);
    });
    return promise;
  }
}

const authFakeService = new AuthFakeService();

export default authFakeService;
