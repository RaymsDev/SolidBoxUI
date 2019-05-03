import { ILink } from '../../models/Link';
import { IUserTask } from '../../models/UserTask';

export interface IUserTaskService {
  Get(links: ILink[]): Promise<IUserTask[]>;
  List(): Promise<IUserTask[]>;
}
