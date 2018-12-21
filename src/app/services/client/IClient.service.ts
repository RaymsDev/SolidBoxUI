import { IClient } from "../../models/Client";

export interface IClientService {
  getClients: () => Promise<IClient[]>;
}
