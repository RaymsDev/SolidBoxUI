import { Branch } from "../../models/Branch";

export interface IBranchsState {
  branchs: Branch[];
  isFetching: boolean;
  isError: boolean;
  errorMessage: string;
}
