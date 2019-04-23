import { Link } from 'react-router-dom';
export interface IBranch {
  id: number;
  name: string;
  agencyId: number;
  links: Link[];
  projectIdList: number[];
  teamIdList: number[];
}

export class Branch {
  public id: number;
  public name: string;
  public agencyId: number;
  public links: Link[];
  public projectIdList: number[];
  public teamIdList: number[];

  constructor(data?: Partial<IBranch>) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.agencyId = data.agencyId;
      this.links = data.links;
      this.projectIdList = data.projectIdList ? data.projectIdList : [];
      this.teamIdList = data.teamIdList ? data.teamIdList : [];
    }
  }

  public clone(): Branch {
    return new Branch({ ...this });
  }
}
