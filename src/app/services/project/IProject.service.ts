import { ILink } from '../../models/Link';
import { Project } from '../../models/Project';

export interface IProjectService {
  get(links: ILink[]): Promise<Project[]>;
  getProjects(): Promise<Project[]>;
}
