import axios from 'axios';
import { apiUrl } from "../../../config/env";
import { User } from "../../models/User";
import { IUserService } from "./IUser.service";
const url = `${apiUrl}/API/Users`;
class UserService implements IUserService {

  public getUsers(): Promise<User[]> {
    const promise = new Promise<User[]>((resolve, reject) => {
      axios.get<User[]>(url)
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

export default new UserService();
