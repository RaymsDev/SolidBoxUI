import { IClient } from "../../models/Client";
import { IClientService } from "./IClient.service";

export const clientsListMock: IClient[] = [{
  id: 1,
  links: [],
  name: "Client 1",
  userId: 1
}, {
  id: 2,
  links: [],
  name: "Client 2",
  userId: 1
}];

class ClientFakeService implements IClientService {
  public getClients(): Promise<IClient[]> {
    const promise = new Promise<IClient[]>((resolve, reject) => {
      resolve(clientsListMock);
    });
    return promise;
  }
}

const clientFakeService = new ClientFakeService();

export default clientFakeService;
