import { Agency } from "../../models/Agency";

export interface IAgencysState {
  agencys: Agency[];
  isFetching: boolean;
  isError: boolean;
  errorMessage: string;
}
