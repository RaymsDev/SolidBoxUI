import { IClient } from '../../../models/Client';

export interface IPRojectSelectorProps {
  clientList: IClient[];
  clientsIsFetching: boolean;
  onClientSelected: (client: IClient) => void;
}
