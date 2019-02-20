export interface INavbarProps {
  title: string;
  isAuthenticated: boolean;
  logout: () => void;
}
