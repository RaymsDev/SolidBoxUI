import { ILink } from './Link';
import { ITask } from './Task';

export interface IProject {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  projectStatutId: number;
  projectModeId: number;
  clientId: number;
  parentProjectId: number;
  sortOrder: number;
  comment: string;
  enableOverRun: boolean;
  updateDate: Date;
  amount: number;
  teamId: number;
  branchId: number;
  agencyId: number;
  ownerUserId: number;
  consumedLoad: number;
  plannedLoad: number;
  totalLoad: number;
  taskIdList: string[];
  links: ILink[];
}

export class Project implements IProject {
  public id: number;
  public name: string;
  public startDate: Date;
  public endDate: Date;
  public projectStatutId: number;
  public projectModeId: number;
  public clientId: number;
  public parentProjectId: number;
  public sortOrder: number;
  public comment: string;
  public enableOverRun: boolean;
  public updateDate: Date;
  public amount: number;
  public teamId: number;
  public branchId: number;
  public agencyId: number;
  public ownerUserId: number;
  public consumedLoad: number;
  public plannedLoad: number;
  public totalLoad: number;
  public taskIdList: string[];
  public links: ILink[];

  constructor(data?: Partial<IProject>) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.startDate = data.startDate;
      this.endDate = data.endDate;
      this.projectStatutId = data.projectStatutId;
      this.projectModeId = data.projectModeId;
      this.clientId = data.clientId;
      this.parentProjectId = data.parentProjectId;
      this.sortOrder = data.sortOrder;
      this.comment = data.comment;
      this.enableOverRun = data.enableOverRun;
      this.updateDate = data.updateDate;
      this.amount = data.amount;
      this.teamId = data.teamId;
      this.branchId = data.branchId;
      this.agencyId = data.agencyId;
      this.ownerUserId = data.ownerUserId;
      this.consumedLoad = data.consumedLoad;
      this.plannedLoad = data.plannedLoad;
      this.totalLoad = data.totalLoad;
      this.links = data.links;
      this.taskIdList = data.taskIdList ? data.taskIdList : [];
      return;
    }

    this.taskIdList = [];
  }

  public Clone(): Project {
    return new Project({ ...this });
  }
}
