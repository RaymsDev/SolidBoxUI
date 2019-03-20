import { Link } from "./Link";

export interface IProjectMode {
  id: number;
  name: string;
  links: Link[];
}

export class ProjectMode {
  public id: number;
  public name: string;
  public links: Link[];

  constructor(projectMode?: IProjectMode) {
    if (projectMode) {
      this.id = projectMode.id;
      this.name = projectMode.name;
      this.links = projectMode.links;
    }
  }
}
