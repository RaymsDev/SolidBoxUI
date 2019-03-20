export interface ITeam {
  id: number;
  name: string;
}

export class Team {
  public id: number;
  public name: string;

  constructor(data?: Partial<ITeam>) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
    }
  }

  public clone(): Team {
    return new Team({ ...this });
  }
}
