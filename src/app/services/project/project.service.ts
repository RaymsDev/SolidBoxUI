import { Project } from "../../models/Project";
import { IProjectService } from "./IProject.service";

class ProjectService implements IProjectService {
  public getProjects(): Promise<Project[]> {
    throw new Error("Method not implemented.");
  }

}

export default new ProjectService();
