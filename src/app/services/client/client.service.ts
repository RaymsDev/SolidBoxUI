import axios from 'axios';
import { IClient } from "../../models/Client";
import { IClientService } from "./IClient.service";

const url = 'https://solidboxapiintegration.azurewebsites.net/api/Clients';

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
