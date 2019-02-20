import axios from 'axios';
import { apiUrl } from "../../../config/env";
import { Link } from "../../models/Link";
import { Task } from "../../models/Task";
import { ITaskService } from "./ITask.service";

const url = `${apiUrl}/API/Tasks`;

class TaskService implements ITaskService {

  public get(links: Link[]): Promise<Task[]> {

    const link = links.find((l) => {
      return l.rel === "ProjectTasks";
    });

    if (!link) {
      return Promise.resolve([]);
    }

    const linkUrl = `${apiUrl}${link.url}`;
    const promise = new Promise<Task[]>((resolve, reject) => {
      axios.get<Task[]>(linkUrl)
        .then((response) => {
          resolve(response.data);
        })
        .catch((response) => {
          reject(response);
        });
    });
    return promise;
  }

  public getTasks(): Promise<Task[]> {
    const promise = new Promise<Task[]>((resolve, reject) => {
      axios.get<Task[]>(url)
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

export default new TaskService();
