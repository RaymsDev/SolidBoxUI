import { Project } from "../../models/Project";

export interface IProjectService {
  getProjects(): Promise<Project[]>;
}
