import { ILink } from '../../models/Link';
import { LinkRelations } from '../../models/LinkRelations';
import { Task } from '../../models/Task';

export interface ITaskService {
  get(links: ILink[], relations: LinkRelations): Promise<Task[]>;
  list(): Promise<Task[]>;
}
