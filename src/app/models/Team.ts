import { Link } from "react-router-dom";

export interface ITeam {
  id: number;
  name: string;
  branchId: number;
  links: Link[];
}

export class Team {
  public id: number;
  public name: string;
  public branchId: number;
  public links: Link[];

  constructor(data?: Partial<ITeam>) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.branchId = data.branchId;
      this.links = data.links;
    }
  }

  public clone(): Team {
    return new Team({ ...this });
  }
}
