import { ILink } from '../../models/Link';
import { LinkRelations } from '../../models/LinkRelations';
import { Project } from '../../models/Project';
import { IProjectService } from './IProject.service';

export const linksMock: ILink[] = [
  {
    rel: LinkRelations.tasks,
    url: '/API/Projects/1/Tasks',
    method: 'GET',
  },
  {
    rel: LinkRelations.self_childs,
    url: '/API/Projects?$filter=ParentProjectId eq 1',
    method: 'GET',
  },
  {
    rel: LinkRelations.self_childs,
    url: '/API/Projects?$filter=ParentProjectId eq 1',
    method: 'GET',
  },
];
export const projectListMock: Project[] = [
  new Project({
    id: 1,
    name: 'Solid Box API',
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
    links: linksMock,
  }),
  new Project({
    id: 6,
    name: 'Solid Box Front React',
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
    links: linksMock,
  }),
];

const asyncDelay = 20;

const projectsPromise = new Promise<Project[]>((resolve, reject) => {
  setTimeout(() => resolve(projectListMock), asyncDelay);
});

class ProjectFakeService implements IProjectService {
  public getProjects(): Promise<Project[]> {
    return projectsPromise;
  }
  public get(link: ILink[]): Promise<Project[]> {
    return projectsPromise;
  }

  public create(project: Project): Promise<Project> {
    projectListMock.push(project);
    return Promise.resolve(project);
  }

  public save(project: Project): Promise<Project> {
    const i = projectListMock.findIndex((p) => p.id === project.id);
    projectListMock[i] = project;
    return Promise.resolve(project);
  }
}
export default new ProjectFakeService();
