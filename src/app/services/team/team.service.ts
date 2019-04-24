import axios from 'axios';
import { apiUrl } from '../../../config/env';
import { ILink } from '../../models/Link';
import { LinkRelations } from '../../models/LinkRelations';
import { Team } from '../../models/Team';
import { ITeamService } from './ITeam.service';
const url = `${apiUrl}/API/Teams`;
// todo service not done on swagger so use fake for the moment
class TeamService implements ITeamService {
  public get(links: ILink[]): Promise<Team[]> {
    const link = links.find(l => {
      return l.rel === LinkRelations.teams;
    });

    if (!link) {
      return Promise.resolve([]);
    }

    const linkUrl = `${apiUrl}${link.url}`;
    const promise = new Promise<Team[]>((resolve, reject) => {
      axios
        .get<Team[]>(linkUrl)
        .then(response => {
          resolve(response.data);
        })
        .catch(response => {
          reject(response);
        });
    });
    return promise;
  }

  public list(): Promise<Team[]> {
    const promise = new Promise<Team[]>((resolve, reject) => {
      axios
        .get<Team[]>(url)
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

export default new TeamService();
