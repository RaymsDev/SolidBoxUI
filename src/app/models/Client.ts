import { ILink } from './Link';

export interface IClient {
  id: number;
  name: string;
  userId: number;
  links: ILink[];
}
export class Client implements IClient {
  public id: number;
  public name: string;
  public userId: number;
  public links: ILink[];
}
