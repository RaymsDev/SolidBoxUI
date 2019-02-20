import { AuthResult } from "../../../models/AuthResult";

export interface IPageTemplateProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}
