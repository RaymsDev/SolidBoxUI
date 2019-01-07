import { User, UserManager, UserManagerSettings } from 'oidc-client';

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

class AuthService {

  public get AccessToken() {
    return this.accessToken;
  }

  public get IdToken() {
    return this.idToken;
  }

  public get IsAuthenticated() {
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
    this.authProvider.getUser()
      .then((user) => {
        this.setSession(user);
      });
  }

  public HandleAuthentication(): void {
    this.authProvider.getUser()
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });

  }

  /*public RenewSession(): Promise<void> {
    const promise = new Promise<void>((resolve, reject) => {
      this.authProvider.checkSession({}, (err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          this.Logout();
          console.error(err);
          reject();
        }
      });
    });
    return promise;

  }*/

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
    const promise = new Promise<void>((resolve, reject) => {
      this.authProvider.signinRedirectCallback()
        .then((authResult: User) => {
          this.setSession(authResult);
          resolve();
        })
        .catch((error) => {
          console.error(error);
          reject();
        });
    });
    return promise;

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
