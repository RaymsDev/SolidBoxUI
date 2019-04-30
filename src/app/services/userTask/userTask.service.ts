import axios from 'axios';
import { apiUrl } from '../../../config/env';
import { ILink } from '../../models/Link';
import { LinkRelations } from '../../models/LinkRelations';
import { IUserTask } from '../../models/UserTask';
import { IUserTaskService } from './IUserTask.service';
const url = `${apiUrl}/API/UserTasks`;

class TaskService implements IUserTaskService {
  public Get(links: ILink[]): Promise<IUserTask[]> {
    const link = links.find(l => {
      return l.rel === LinkRelations.userTasks;
    });

    if (!link) {
      return Promise.resolve([]);
    }

    const linkUrl = `${apiUrl}${link.url}`;
    const promise = new Promise<IUserTask[]>((resolve, reject) => {
      axios
        .get<IUserTask[]>(linkUrl)
        .then(response => {
          resolve(response.data);
        })
        .catch(response => {
          reject(response);
        });
    });
    return promise;
  }

  public List(): Promise<IUserTask[]> {
    const promise = new Promise<IUserTask[]>((resolve, reject) => {
      axios
        .get<IUserTask[]>(url)
        .then(response => {
          resolve(response.data);
        })
        .catch(response => {
          reject(response);
        });
    });
    return promise;
  }
}

export default new TaskService();
