import axios from 'axios';
import { apiUrl } from '../../../config/env';
import { ILink } from '../../models/Link';
import { LinkRelations } from '../../models/LinkRelations';
import { User } from '../../models/User';
import { IUserService } from './IUser.service';
const url = `${apiUrl}/API/Users`;
class UserService implements IUserService {
  public get(links: ILink[]): Promise<User[]> {
    const link = links.find(l => {
      return l.rel === LinkRelations.users;
    });

    if (!link) {
      return Promise.resolve([]);
    }

    const linkUrl = `${apiUrl}${link.url}`;
    const promise = new Promise<User[]>((resolve, reject) => {
      axios
        .get<User[]>(linkUrl)
        .then(response => {
          resolve(response.data);
        })
        .catch(response => {
          reject(response);
        });
    });
    return promise;
  }
  public list(): Promise<User[]> {
    const promise = new Promise<User[]>((resolve, reject) => {
      axios
        .get<User[]>(url)
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

export default new UserService();
