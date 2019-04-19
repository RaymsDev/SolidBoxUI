import { Link } from "react-router-dom";
export interface IAgency {
  id: number;
  name: string;
  links: Link[];
}

export class Agency {
  public id: number;
  public name: string;
  public links: Link[];

  constructor(data?: Partial<IAgency>) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.links = data.links;
    }
  }

  public clone(): Agency {
    return new Agency({ ...this });
  }
}
