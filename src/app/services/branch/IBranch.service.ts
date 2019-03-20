import { Branch } from "../../models/Branch";

export interface IBranchService {
  list(): Promise<Branch[]>;
}
