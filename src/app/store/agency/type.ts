import { IAgency } from '../../models/Agency';
import { IListNormalized } from '../../models/IListNormalized';

export interface IAgencysState {
  agencies: IListNormalized<IAgency>;
  isFetching: boolean;
  isError: boolean;
  errorMessage: string;
}
