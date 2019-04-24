import { ILink } from './Link';

export interface ITeam {
  id: number;
  name: string;
  branchId: number;
  links: ILink[];
  projectIdList: number[];
  memberIdList: number[];
}

export class Team {
  public id: number;
  public name: string;
  public branchId: number;
  public links: ILink[];
  public projectIdList: number[];
  public memberIdList: number[];
  constructor(data?: Partial<ITeam>) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.branchId = data.branchId;
      this.links = data.links ? data.links : [];
      this.projectIdList = data.projectIdList ? data.projectIdList : [];
      this.memberIdList = data.memberIdList ? data.memberIdList : [];
    }
  }

  public clone(): Team {
    return new Team({ ...this });
  }
}
