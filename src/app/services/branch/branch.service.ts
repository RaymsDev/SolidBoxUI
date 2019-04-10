import axios from 'axios';
import { apiUrl } from "../../../config/env";
import { Branch } from "../../models/Branch";
import { IBranchService } from "./IBranch.service";
const url = `${apiUrl}/API/Branchs`;
class BranchService implements IBranchService {

  public list(): Promise<Branch[]> {
    const promise = new Promise<Branch[]>((resolve, reject) => {
      axios.get<Branch[]>(url)
        .then((response) => {
          resolve(response.data);
        })
        .catch((response) => {
          reject(response);
        });
    });
    return promise;
  }

}

export default new BranchService();
