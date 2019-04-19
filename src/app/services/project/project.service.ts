import axios from 'axios';
import { apiUrl } from '../../../config/env';
import { ILink } from '../../models/Link';
import { LinkRelations } from '../../models/LinkRelations';
import { Project } from '../../models/Project';
import { IProjectService } from './IProject.service';
const url = `${apiUrl}/API/Projects`;

class ProjectService implements IProjectService {
  public get(links: ILink[]): Promise<Project[]> {
    const link = links.find(l => {
      return l.rel == LinkRelations.projects;
    });

    if (!link) {
      return Promise.resolve([]);
    }

    const linkUrl = `${apiUrl}${link.url}`;
    const promise = new Promise<Project[]>((resolve, reject) => {
      axios
        .get<Project[]>(linkUrl)
        .then(response => {
          resolve(response.data);
        })
        .catch(response => {
          reject(response);
        });
    });
    return promise;
  }

  public getProjects(): Promise<Project[]> {
    const promise = new Promise<Project[]>((resolve, reject) => {
      axios
        .get<Project[]>(url)
        .then(response => {
          resolve(response.data);
        })
        .catch(response => {
          reject(response);
        });
    });
    return promise;
  }

  public create(project: Project): Promise<Project> {
    return new Promise<Project>((resolve, reject) => {
      axios
        .post<any>(url, project)
        .then(response => {
          console.log(response);
          resolve(project);
        })
        .catch(response => {
          reject(response);
        });
    });
  }
}

export default new ProjectService();
