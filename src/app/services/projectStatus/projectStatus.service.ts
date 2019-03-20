import axios from 'axios';
import { apiUrl } from "../../../config/env";
import { ProjectStatus } from "../../models/ProjectStatus";
import { IProjectStatusService } from "./IProjectStatus.service";
const url = `${apiUrl}/api/Enums/ProjectStatus`;

class ProjectStatusService implements IProjectStatusService {

  public getProjectStatuss(): Promise<ProjectStatus[]> {
    const promise = new Promise<ProjectStatus[]>((resolve, reject) => {
      axios.get<ProjectStatus[]>(url)
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

export default new ProjectStatusService();
