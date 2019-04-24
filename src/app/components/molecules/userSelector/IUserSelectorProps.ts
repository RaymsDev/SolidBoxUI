import { IAgency } from '../../../models/Agency';
import { IBranch } from '../../../models/Branch';
import { IListNormalized } from '../../../models/IListNormalized';
import { ITeam } from '../../../models/Team';
import { IUser } from '../../../models/User';

export interface IUserSelectorProps {
  // Agency
  agencyList: IListNormalized<IAgency>;
  agencyIsFetching: boolean;
  onAgencySelected: (agency: IAgency) => void;
  // Branch
  branchList: IListNormalized<IBranch>;
  branchIsFetching: boolean;
  onBranchSelected: (branch: IBranch) => void;
  // Team
  teamList: IListNormalized<ITeam>;
  teamIsFetching: boolean;
  onTeamSelected: (team: ITeam) => void;
  // User
  userList: IListNormalized<IUser>;
  userIsFetching: boolean;
  onUsersSelected: (users: IUser[]) => void;
}
