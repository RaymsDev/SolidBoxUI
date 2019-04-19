import { Link } from "react-router-dom";
export interface IBranch {
  id: number;
  name: string;
  agencyId: number;
  links: Link[];
}

export class Branch {
  public id: number;
  public name: string;
  public agencyId: number;
  public links: Link[];

  constructor(data?: Partial<IBranch>) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.agencyId = data.agencyId;
      this.links = data.links;
    }
  }

  public clone(): Branch {
    return new Branch({ ...this });
  }
}
