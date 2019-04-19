import { Link } from "./Link";

export interface IUser {
  id: number;
  lastName: string;
  firstName: string;
  trigram: string;
  login: string;
  entryDate: Date;
  leaveDate: Date;
  teamId: number;
  userRoleId: number;
  isActive: boolean;
  links: Link[];
}

export class User {
  public id: number;
  public lastName: string;
  public firstName: string;
  public trigram: string;
  public login: string;
  public entryDate: Date;
  public leaveDate: Date;
  public teamId: number;
  public userRoleId: number;
  public isActive: boolean;
  public links: Link[];

  constructor(data?: Partial<IUser>) {
    if (data) {
      this.id = data.id;
      this.lastName = data.lastName;
      this.firstName = data.firstName;
      this.trigram = data.trigram;
      this.login = data.login;
      this.entryDate = data.entryDate;
      this.leaveDate = data.leaveDate;
      this.teamId = data.teamId;
      this.userRoleId = data.userRoleId;
      this.isActive = data.isActive;
      this.links = data.links;
    }
  }

  public clone(): User {
    return new User({ ...this });
  }
}
