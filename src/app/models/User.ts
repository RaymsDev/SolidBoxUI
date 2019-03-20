export interface IUser {
  id: number;
  name: string;
}

export class User {
  public id: number;
  public name: string;

  constructor(data?: Partial<IUser>) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
    }
  }

  public clone(): User {
    return new User({ ...this });
  }
}
