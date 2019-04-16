import { Link } from '../../models/Link';
import { LinkRelations } from '../../models/LinkRelations';
import { ITask } from '../../models/Task';
import { ITaskService } from './ITask.service';

export const taskListMock: ITask[] = [];

export const linksMock: Link[] = [
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

const projectsPromise = new Promise<ITask[]>((resolve, reject) => {
  setTimeout(() => resolve(taskListMock), asyncDelay);
});

class ProjectFakeService implements ITaskService {
  public list(): Promise<ITask[]> {
    return projectsPromise;
  }
  public get(link: Link[], relation: LinkRelations): Promise<ITask[]> {
    return projectsPromise;
  }
}
export default new ProjectFakeService();
