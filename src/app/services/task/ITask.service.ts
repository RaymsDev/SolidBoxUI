import { Link } from '../../models/Link';
import { LinkRelations } from '../../models/LinkRelations';
import { Task } from '../../models/Task';

export interface ITaskService {
  get(links: Link[], relations: LinkRelations): Promise<Task[]>;
  list(): Promise<Task[]>;
}
