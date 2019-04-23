import { Link } from 'react-router-dom';

export interface ITeam {
  id: number;
  name: string;
  branchId: number;
  links: Link[];
  projectIdList: number[];
  memberIdList: number[];
}

export class Team {
  public id: number;
  public name: string;
  public branchId: number;
  public links: Link[];
  public projectIdList: number[];
  public memberIdList: number[];
  constructor(data?: Partial<ITeam>) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.branchId = data.branchId;
      this.links = data.links;
      this.projectIdList = data.projectIdList ? data.projectIdList : [];
      this.memberIdList = data.memberIdList ? data.memberIdList : [];
    }
  }

  public clone(): Team {
    return new Team({ ...this });
  }
}

export interface ITeamsNormalized {
  [teamId: string]: ITeam;
}
