import { Link } from "../../models/Link";
import { User } from "../../models/User";

export interface IUserService {
  getUsers(): Promise<User[]>;
}
