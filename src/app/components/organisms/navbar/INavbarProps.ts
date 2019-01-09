export interface INavbarProps {
  title: string;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}
