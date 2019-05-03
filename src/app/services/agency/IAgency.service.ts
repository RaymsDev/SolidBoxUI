import { Agency } from "../../models/Agency";

export interface IAgencyService {
  list(): Promise<Agency[]>;
}
