import { IClient } from "../../models/Client";
import { IClientService } from "./IClient.service";

export const clientsListMock: IClient[] = [{
  id: 2,
  name: "Neos-SDI",
  userId: 2,
  links: [
    {
      rel: "ClientProjects",
      url: "/API/Projects?$filter=ClientId eq 2",
      method: "GET"
    }
  ]
},
{
  id: 3,
  name: "Stelia Aerospace",
  userId: 2,
  links: [
    {
      rel: "ClientProjects",
      url: "/API/Projects?$filter=ClientId eq 3",
      method: "GET"
    }
  ]
},
{
  id: 4,
  name: "Foo Bar",
  userId: 2,
  links: [
    {
      rel: "ClientProjects",
      url: "/API/Projects?$filter=ClientId eq 4",
      method: "GET"
    }
  ]
}];

const asyncDelay = 20;

class ClientFakeService implements IClientService {
  public getClients(): Promise<IClient[]> {
    const promise = new Promise<IClient[]>((resolve, reject) => {
      setTimeout(() => resolve(clientsListMock), asyncDelay);
    });
    return promise;
  }
}

const clientFakeService = new ClientFakeService();

export default clientFakeService;
