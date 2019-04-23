import { ILink } from './Link';

export interface IAgency {
  id: number;
  name: string;
  links: ILink[];
  branchIdList: number[];
  projectIdList: number[];
}

export class Agency {
  public id: number;
  public name: string;
  public links: ILink[];
  public branchIdList: number[];
  public projectIdList: number[];
  constructor(data?: Partial<IAgency>) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.links = data.links;
      this.branchIdList = data.branchIdList ? data.branchIdList : [];
      this.projectIdList = data.projectIdList ? data.projectIdList : [];
    }
  }

  public clone(): Agency {
    return new Agency({ ...this });
  }
}
