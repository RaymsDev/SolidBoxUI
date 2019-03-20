import { Agency } from "../../models/Agency";
import { IAgencyService } from "./IAgency.service";

export const AgencyListMock: Agency[] = [
  new Agency({
    id: 1,
    name: "H&M",
  }),
  new Agency({
    id: 2,
    name: "Nike",
  }),
  new Agency({
    id: 3,
    name: "Adidas",
  }),
];

const asyncDelay = 20;

const AgencysPromise = new Promise<Agency[]>((resolve, reject) => {
  setTimeout(() => resolve(AgencyListMock), asyncDelay);
});

class AgencyFakeService implements IAgencyService {
  public list(): Promise<Agency[]> {
    return AgencysPromise;
  }
}
export default new AgencyFakeService();
