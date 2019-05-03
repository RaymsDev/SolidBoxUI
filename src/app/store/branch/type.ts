import { IBranch } from '../../models/Branch';
import { IListNormalized } from '../../models/IListNormalized';

export interface IBranchesState {
  branches: IListNormalized<IBranch>;
  isFetching: boolean;
  isError: boolean;
  errorMessage: string;
}
