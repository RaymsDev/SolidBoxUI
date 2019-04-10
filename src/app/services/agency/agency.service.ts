import axios from 'axios';
import { apiUrl } from "../../../config/env";
import { Agency } from "../../models/Agency";
import { IAgencyService } from "./IAgency.service";
const url = `${apiUrl}/API/Agencies`;
class AgencyService implements IAgencyService {

  public list(): Promise<Agency[]> {
    const promise = new Promise<Agency[]>((resolve, reject) => {
      axios.get<Agency[]>(url)
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

export default new AgencyService();
