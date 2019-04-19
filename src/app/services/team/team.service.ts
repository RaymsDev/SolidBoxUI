import axios from 'axios';
import { apiUrl } from "../../../config/env";
import { Team } from "../../models/Team";
import { ITeamService } from "./ITeam.service";
const url = `${apiUrl}/API/Teams`;
// todo service not done on swagger so use fake for the moment
class TeamService implements ITeamService {

  public list(): Promise<Team[]> {
    const promise = new Promise<Team[]>((resolve, reject) => {
      axios.get<Team[]>(url)
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

export default new TeamService();
