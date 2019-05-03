import { RouteChildrenProps } from 'react-router';
import { IAgency } from '../../../models/Agency';
import { IBranch } from '../../../models/Branch';
import { Client } from '../../../models/Client';
import { IListNormalized } from '../../../models/IListNormalized';
import { Project } from '../../../models/Project';
import { ProjectMode } from '../../../models/ProjectMode';
import { ProjectStatus } from '../../../models/ProjectStatus';
import { ITeam } from '../../../models/Team';
import { IUser } from '../../../models/User';

export interface IEditProjectPageProps
  extends RouteChildrenProps<IEditProjectPagePropsParams> {
  listProjectMode: ProjectMode[];
  listProjectStatus: ProjectStatus[];
  listUser: IListNormalized<IUser>;
  agenciesNormalized: IListNormalized<IAgency>;
  listBranch: IListNormalized<IBranch>;
  listTeam: IListNormalized<ITeam>;
  listClient: Client[];
  listProject: Project[];
  isFetching: boolean;
  isFetchingMessage: string;
  onDelete: () => void;
  onSave: () => void;
  onCreate: () => void;
}

interface IEditProjectPagePropsParams {
  id: string;
}
