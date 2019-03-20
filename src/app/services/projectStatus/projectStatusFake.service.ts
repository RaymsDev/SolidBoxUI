import { ProjectStatus } from "../../models/ProjectStatus";
import { IProjectStatusService } from "./IProjectStatus.service";

export const projectListMock: ProjectStatus[] = [
  new ProjectStatus({
    id: 1,
    name: "Forfait",
    links: []
  }),
  new ProjectStatus({
    id: 2,
    name: "Régie",
    links: []
  }),
  new ProjectStatus({
    id: 3,
    name: "TMA",
    links: []
  }),
  new ProjectStatus({
    id: 4,
    name: "TMI",
    links: []
  })

];

const asyncDelay = 20;

const projectsPromise = new Promise<ProjectStatus[]>((resolve, reject) => {
  setTimeout(() => resolve(projectListMock), asyncDelay);
});

class ProjectStatusFakeService implements IProjectStatusService {
  public getProjectStatuss(): Promise<ProjectStatus[]> {
    return projectsPromise;
  }
}
export default new ProjectStatusFakeService();
