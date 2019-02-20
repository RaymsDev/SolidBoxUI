import axios from 'axios';
import { apiUrl } from "../../../config/env";
import { Link } from "../../models/Link";
import { Project } from "../../models/Project";
import { IProjectService } from "./IProject.service";
const url = `${apiUrl}/API/Projects`;
const myProjectUrl = `${apiUrl}/API/Projects/me`;

class ProjectService implements IProjectService {

  public get(links: Link[]): Promise<Project[]> {

    const link = links.find((l) => {
      return l.rel === "ClientProjects";
    });

    if (!link) {
      return Promise.resolve([]);
    }

    const linkUrl = `${apiUrl}${link.url}`;
    const promise = new Promise<Project[]>((resolve, reject) => {
      axios.get<Project[]>(linkUrl)
        .then((response) => {
          resolve(response.data);
        })
        .catch((response) => {
          reject(response);
        });
    });
    return promise;
  }

  public getProjects(): Promise<Project[]> {
    const promise = new Promise<Project[]>((resolve, reject) => {
      axios.get<Project[]>(url)
        .then((response) => {
          resolve(response.data);
        })
        .catch((response) => {
          reject(response);
        });
    });
    return promise;
  }

  public getMyProjects(): Promise<Project[]> {
    const promise = new Promise<Project[]>((resolve, reject) => {
      axios.get<Project[]>(myProjectUrl)
        .then((response) => {
          resolve(response.data);
        })
        .catch((response) => {
          reject(response);
        });
    });
    return promise;
  }
}

export default new ProjectService();
