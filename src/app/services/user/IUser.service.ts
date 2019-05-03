import { ILink } from '../../models/Link';
import { User } from '../../models/User';

export interface IUserService {
  get(links: ILink[]): Promise<User[]>;
  list(): Promise<User[]>;
}
