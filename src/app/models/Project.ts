import { IClient } from "./Client";
import { Link } from "./Link";

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
  links: Link[];
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
  public links: Link[];
}
