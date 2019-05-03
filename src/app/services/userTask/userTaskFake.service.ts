import { ILink } from '../../models/Link';
import { IUserTask } from '../../models/UserTask';
import { IUserTaskService } from './IUserTask.service';

export const UserTaskListMock: IUserTask[] = [
  {
    id: 1,
    comment: 'test',
    duration: 1,
    links: [],
    isFlexible: false,
    startAt: new Date(),
    taskId: 2,
    userId: 1,
  },
  {
    id: 2,
    comment: 'test',
    duration: 1,
    links: [],
    isFlexible: false,
    startAt: new Date(),
    taskId: 2,
    userId: 1,
  },
];

const asyncDelay = 20;
const userTasksPromise = new Promise<IUserTask[]>((resolve, reject) => {
  setTimeout(() => resolve(UserTaskListMock), asyncDelay);
});

class UserTaskFakeService implements IUserTaskService {
  public Get(links: ILink[]): Promise<IUserTask[]> {
    return userTasksPromise;
  }
  public List(): Promise<IUserTask[]> {
    return userTasksPromise;
  }
}

export default new UserTaskFakeService();
