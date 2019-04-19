import { ProjectMode } from "../../models/ProjectMode";
import { IProjectModeService } from "./IProjectMode.service";

export const projectListMock: ProjectMode[] = [
  new ProjectMode({
    id: 1,
    name: "Forfait",
    links: []
  }),
  new ProjectMode({
    id: 2,
    name: "Régie",
    links: []
  }),
  new ProjectMode({
    id: 3,
    name: "TMA",
    links: []
  }),
  new ProjectMode({
    id: 4,
    name: "TMI",
    links: []
  })

];

const asyncDelay = 20;

const projectsPromise = new Promise<ProjectMode[]>((resolve, reject) => {
  setTimeout(() => resolve(projectListMock), asyncDelay);
});

class ProjectModeFakeService implements IProjectModeService {
  public getProjectModes(): Promise<ProjectMode[]> {
    return projectsPromise;
  }
}
export default new ProjectModeFakeService();
