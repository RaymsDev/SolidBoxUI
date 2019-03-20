export interface ILoginPageProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}
