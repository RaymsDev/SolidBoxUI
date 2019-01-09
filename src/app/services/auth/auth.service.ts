import { User, UserManager, UserManagerSettings } from 'oidc-client';
import { AuthResult } from '../../models/AuthResult';
import { IAuthService } from './IAuth.Service';

const authConfig = {
  authority: "https://solididentityintegration.azurewebsites.net",
  client_id: "teamwork",
  redirect_uri: `${window.location.origin}/callback`,
  response_type: "id_token token",
  scope: "openid profile SolidBox",
  post_logout_redirect_uri: `${window.location.origin}`,
};

enum localStorageName {
  expireAt = 'expiresAt',
  isLoggedIn = 'isLoggedIn'
}

const homeUrl = "/";

class AuthService implements IAuthService {

  public get AccessToken() {
    return this.accessToken;
  }

  public get IdToken() {
    return this.idToken;
  }

  public get IsAuthenticated() {

    if (localStorage.getItem(localStorageName.isLoggedIn) !== "false") {
      return false;
    }

    // Check whether the current time is past the
    // access token's expiry time
    if (!this.expiresAt) {
      this.expiresAt = Number(localStorage.getItem(localStorageName.expireAt));
    }
    return new Date().getTime() < this.expiresAt;
  }

  private accessToken: string;
  private idToken: string;
  private expiresAt: number;
  private authProvider: UserManager;

  constructor(config: UserManagerSettings) {
    this.authProvider = new UserManager(config);
  }

  public CheckAuthentication(): Promise<AuthResult> {
    const promise = new Promise<AuthResult>((resolve, reject) => {
      this.authProvider.getUser()
        .then((user) => {
          resolve(this.handleAuthresult(user));
        })
        .catch((error) => {
          reject(`User is not auth:${error.message}`);
        });
    });
    return promise;
  }

  public Login() {
    this.authProvider.signinRedirect();
  }

  public Logout() {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove isLoggedIn flag from localStorage
    localStorage.setItem(localStorageName.isLoggedIn, 'false');
    localStorage.removeItem(localStorageName.expireAt);
    this.authProvider.signoutRedirect();
  }

  public HandleCallback() {
    const promise = new Promise<AuthResult>((resolve, reject) => {
      this.authProvider.signinRedirectCallback()
        .then((user: User) => {
          resolve(this.handleAuthresult(user));
        })
        .catch((error) => {
          console.error(error);
          reject();
        });
    });
    return promise;

  }

  private handleAuthresult(user: User): AuthResult {
    this.setSession(user);
    return {
      user,
      isAuthenticated: Boolean(user)
    };
  }

  private setSession(authResult: User) {
    if (!authResult) {
      localStorage.setItem(localStorageName.isLoggedIn, 'false');
      return;
    }
    // Set isLoggedIn flag in localStorage
    localStorage.setItem(localStorageName.isLoggedIn, 'true');

    // Set the time that the access token will expire at
    const expiresAt = (authResult.expires_at * 1000) + new Date().getTime();
    this.accessToken = authResult.access_token;
    this.idToken = authResult.id_token;
    this.expiresAt = expiresAt;
    localStorage.setItem(localStorageName.expireAt, expiresAt.toString());
  }
}

const authService = new AuthService(authConfig);

export default authService;
