import { ILink } from './Link';

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
  links: ILink[];
  userTaskIdList: number[];
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
  public links: ILink[];
  public userTaskIdList: number[];

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
      this.userTaskIdList = data.userTaskIdList ? data.userTaskIdList : [];
    }
  }

  public clone(): User {
    return new User({ ...this });
  }
}
