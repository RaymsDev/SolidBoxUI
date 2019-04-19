import { Branch } from "../../models/Branch";
import { IBranchService } from "./IBranch.service";

export const BranchListMock: Branch[] = [
  new Branch({
    id: 1,
    name: "Tilleul",
  }),
  new Branch({
    id: 2,
    name: "baobab",
  }),
  new Branch({
    id: 3,
    name: "Saule",
  }),
];

const asyncDelay = 20;

const BranchsPromise = new Promise<Branch[]>((resolve, reject) => {
  setTimeout(() => resolve(BranchListMock), asyncDelay);
});

class BranchFakeService implements IBranchService {
  public list(): Promise<Branch[]> {
    return BranchsPromise;
  }
}
export default new BranchFakeService();
