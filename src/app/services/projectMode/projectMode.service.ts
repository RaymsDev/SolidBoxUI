import axios from 'axios';
import { apiUrl } from "../../../config/env";
import { ProjectMode } from "../../models/ProjectMode";
import { IProjectModeService } from "./IProjectMode.service";
const url = `${apiUrl}/api/Enums/ProjectModes`;

class ProjectModeService implements IProjectModeService {

  public getProjectModes(): Promise<ProjectMode[]> {
    const promise = new Promise<ProjectMode[]>((resolve, reject) => {
      axios.get<ProjectMode[]>(url)
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

export default new ProjectModeService();
