import { Team } from "../../models/Team";

export interface ITeamService {
  list(): Promise<Team[]>;
}
