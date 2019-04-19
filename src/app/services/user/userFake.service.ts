import { User } from "../../models/User";
import { IUserService } from "./IUser.service";

export const UserListMock: User[] = [
  new User({
    id: 1,
    firstName: "Yann",
    lastName: "SIMON",
  }),
  new User({
    id: 2,
    firstName: "Rémi",
    lastName: "LAFUGE",
  }),
  new User({
    id: 3,
    firstName: "Alexandre",
    lastName: "QUENTIN",
  }),
  new User({
    id: 4,
    firstName: "Vincent",
    lastName: "MADELEINE",
  }),
  new User({
    id: 5,
    firstName: "Lucas",
    lastName: "AUDOUART",
  }),
  new User({
    id: 6,
    firstName: "Ludovic",
    lastName: "SENECHAL",
  }),
];

const asyncDelay = 20;

const UsersPromise = new Promise<User[]>((resolve, reject) => {
  setTimeout(() => resolve(UserListMock), asyncDelay);
});

class UserFakeService implements IUserService {
  public getUsers(): Promise<User[]> {
    return UsersPromise;
  }
}
export default new UserFakeService();
