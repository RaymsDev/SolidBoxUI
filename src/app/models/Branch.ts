export interface IBranch {
  id: number;
  name: string;
}

export class Branch {
  public id: number;
  public name: string;

  constructor(data?: Partial<IBranch>) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
    }
  }

  public clone(): Branch {
    return new Branch({ ...this });
  }
}
