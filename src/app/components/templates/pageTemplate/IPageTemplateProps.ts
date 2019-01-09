import { AuthUser } from "../../../models/AuthUser";

export interface IPageTemplateProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}
