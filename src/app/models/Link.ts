import { LinkRelations } from './LinkRelations';

export interface ILink {
  rel: LinkRelations;
  url: string;
  method: string;
}
