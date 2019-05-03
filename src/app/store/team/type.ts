import { IListNormalized } from '../../models/IListNormalized';
import { ITeam } from '../../models/Team';

export interface ITeamsState {
  teams: IListNormalized<ITeam>;
  isFetching: boolean;
  isError: boolean;
  errorMessage: string;
}
