import { Team } from "../../models/Team";

export interface ITeamsState {
  teams: Team[];
  isFetching: boolean;
  isError: boolean;
  errorMessage: string;
}
