import { Link } from "./Link";

export class Project {
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
