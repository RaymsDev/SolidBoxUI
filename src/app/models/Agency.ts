export interface IAgency {
  id: number;
  name: string;
}

export class Agency {
  public id: number;
  public name: string;

  constructor(data?: Partial<IAgency>) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
    }
  }

  public clone(): Agency {
    return new Agency({ ...this });
  }
}
