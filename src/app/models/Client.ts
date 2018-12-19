import { Link } from './Link';

export interface IClient {
  id: number;
  name: string;
  userId: number;
  links: Link[];
}
export class Client implements IClient {
  public id: number;
  public name: string;
  public userId: number;
  public links: Link[];
}
