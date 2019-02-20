import { Link } from "../../models/Link";
import { Project } from "../../models/Project";

export interface IProjectService {
  get(links: Link[]): Promise<Project[]>;
  getProjects(): Promise<Project[]>;
  getMyProjects(): Promise<Project[]>;
}
