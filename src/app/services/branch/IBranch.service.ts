import { Branch } from '../../models/Branch';
import { ILink } from '../../models/Link';

export interface IBranchService {
  get(links: ILink[]): Promise<Branch[]>;
  list(): Promise<Branch[]>;
}
