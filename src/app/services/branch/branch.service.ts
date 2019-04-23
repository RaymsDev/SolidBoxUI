import axios from 'axios';
import { apiUrl } from '../../../config/env';
import { Branch } from '../../models/Branch';
import { ILink } from '../../models/Link';
import { LinkRelations } from '../../models/LinkRelations';
import { IBranchService } from './IBranch.service';
const url = `${apiUrl}/API/Branches`;
class BranchService implements IBranchService {
  public get(links: ILink[]): Promise<Branch[]> {
    const link = links.find(l => {
      return l.rel === LinkRelations.branches;
    });

    if (!link) {
      return Promise.resolve([]);
    }

    const linkUrl = `${apiUrl}${link.url}`;
    const promise = new Promise<Branch[]>((resolve, reject) => {
      axios
        .get<Branch[]>(linkUrl)
        .then(response => {
          resolve(response.data);
        })
        .catch(response => {
          reject(response);
        });
    });
    return promise;
  }

  public list(): Promise<Branch[]> {
    const promise = new Promise<Branch[]>((resolve, reject) => {
      axios
        .get<Branch[]>(url)
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

export default new BranchService();
