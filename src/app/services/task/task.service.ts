import axios from 'axios';
import { apiUrl } from '../../../config/env';
import { ILink } from '../../models/Link';
import { LinkRelations } from '../../models/LinkRelations';
import { ITask } from '../../models/Task';
import { ITaskService } from './ITask.service';
const url = `${apiUrl}/API/Tasks`;

class TaskService implements ITaskService {
  public get(links: ILink[]): Promise<ITask[]> {
    const link = links.find(l => {
      return l.rel === LinkRelations.tasks;
    });

    if (!link) {
      return Promise.resolve([]);
    }

    const linkUrl = `${apiUrl}${link.url}`;
    const promise = new Promise<ITask[]>((resolve, reject) => {
      axios
        .get<ITask[]>(linkUrl)
        .then(response => {
          resolve(response.data);
        })
        .catch(response => {
          reject(response);
        });
    });
    return promise;
  }

  public list(): Promise<ITask[]> {
    const promise = new Promise<ITask[]>((resolve, reject) => {
      axios
        .get<ITask[]>(url)
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
