import { ILink } from '../../models/Link';
import { Team } from '../../models/Team';
import { ITeamService } from './ITeam.service';

export const TeamListMock: Team[] = [
  new Team({
    id: 1,
    name: 'Alpha',
  }),
  new Team({
    id: 2,
    name: 'Bravo',
  }),
  new Team({
    id: 3,
    name: 'Tango',
  }),
];

const asyncDelay = 20;

const TeamsPromise = new Promise<Team[]>((resolve, reject) => {
  setTimeout(() => resolve(TeamListMock), asyncDelay);
});

class TeamFakeService implements ITeamService {
  public get(links: ILink[]): Promise<Team[]> {
    return TeamsPromise;
  }
  public list(): Promise<Team[]> {
    return TeamsPromise;
  }
}
export default new TeamFakeService();
