import { ILink } from '../../models/Link';
import { LinkRelations } from '../../models/LinkRelations';
import { ITask } from '../../models/Task';
import { ITaskService } from './ITask.service';

export const taskListMock: ITask[] = [
  {
    projectId: 1,
    links: [],
    load: 5,
    sortOrder: 1,
    taskTypeId: 1,
    name: 'fake task 1',
    id: 1,
    realizedPercentage: 10,
  },
];

export const linksMock: ILink[] = [
  {
    url: 'good_url',
    method: 'fake_method',
    rel: LinkRelations.tasks,
  },
  {
    url: 'fake_url',
    method: 'fake_method',
    rel: LinkRelations.projects,
  },
];

const asyncDelay = 20;

const tasksPromise = new Promise<ITask[]>((resolve, reject) => {
  setTimeout(() => resolve(taskListMock), asyncDelay);
});

class ProjectFakeService implements ITaskService {
  public list(): Promise<ITask[]> {
    return tasksPromise;
  }
  public get(link: ILink[], relation: LinkRelations): Promise<ITask[]> {
    return tasksPromise;
  }
}
export default new ProjectFakeService();
