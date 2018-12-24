import { Project } from "../../models/Project";
import { IProjectService } from "./IProject.service";

export const projectListMock: Project[] = [
  {
    id: 1,
    name: "Solid Box API",
    startDate: null,
    endDate: null,
    projectStatutId: 1,
    projectModeId: 1,
    clientId: null,
    parentProjectId: null,
    sortOrder: null,
    comment: null,
    enableOverRun: null,
    updateDate: null,
    amount: null,
    teamId: 1,
    branchId: 1,
    agencyId: 1,
    ownerUserId: 2,
    consumedLoad: 0,
    plannedLoad: 0,
    totalLoad: 0,
    links: [
      {
        rel: "ProjectChildren",
        url: "/API/Projects?$filter=ParentProjectId eq 1",
        method: "GET"
      },
      {
        rel: "ProjectChildren",
        url: "/API/Projects?$filter=ParentProjectId eq 1",
        method: "GET"
      }
    ]
  },
  {
    id: 6,
    name: "Solid Box Front React",
    startDate: null,
    endDate: null,
    projectStatutId: 1,
    projectModeId: 1,
    clientId: null,
    parentProjectId: null,
    sortOrder: null,
    comment: null,
    enableOverRun: null,
    updateDate: null,
    amount: null,
    teamId: 1,
    branchId: 1,
    agencyId: 1,
    ownerUserId: 3,
    consumedLoad: 0,
    plannedLoad: 0,
    totalLoad: 0,
    links: []
  },];

const asyncDelay = 20;

class ProjectFakeService implements IProjectService {
  public getProjects(): Promise<Project[]> {
    const promise = new Promise<Project[]>((resolve, reject) => {
      setTimeout(() => resolve(projectListMock), asyncDelay);
    });
    return promise;
  }
}
export default new ProjectFakeService();
