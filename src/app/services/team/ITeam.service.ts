import { ILink } from '../../models/Link';
import { Team } from '../../models/Team';

export interface ITeamService {
  get(links: ILink[]): Promise<Team[]>;
  list(): Promise<Team[]>;
}
