import { ILink } from './Link';

export interface IProjectMode {
  id: number;
  name: string;
  links: ILink[];
}

export class ProjectMode {
  public id: number;
  public name: string;
  public links: ILink[];

  constructor(projectMode?: IProjectMode) {
    if (projectMode) {
      this.id = projectMode.id;
      this.name = projectMode.name;
      this.links = projectMode.links;
    }
  }
}
