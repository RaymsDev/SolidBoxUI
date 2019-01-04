import axios from 'axios';
import { apiUrl } from '../../../config/env';
import { IClient } from "../../models/Client";
import { IClientService } from "./IClient.service";

const url = `${apiUrl}/API/Clients`;

class ClientService implements IClientService {
  public getClients(): Promise<IClient[]> {
    const promise = new Promise<IClient[]>((resolve, reject) => {
      axios.get<IClient[]>(url)
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

const clientService = new ClientService();

export default clientService;
