import { ILink } from '../../models/Link';
import { Task } from '../../models/Task';

export interface ITaskService {
  get(links: ILink[]): Promise<Task[]>;
  getUnique(links: ILink[]): Promise<Task>;
  list(): Promise<Task[]>;
}
