import { ILink } from './Link';

export interface IProjectStatus {
  id: number;
  name: string;
  links: ILink[];
}

export class ProjectStatus {
  public id: number;
  public name: string;
  public links: ILink[];

  constructor(projectStatus?: IProjectStatus) {
    if (projectStatus) {
      this.id = projectStatus.id;
      this.name = projectStatus.name;
      this.links = projectStatus.links;
    }
  }
}
