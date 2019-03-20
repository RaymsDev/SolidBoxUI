import { User } from "../../models/User";
import { IUserService } from "./IUser.service";

export const UserListMock: User[] = [
  new User({
    id: 1,
    name: "Yann",
  }),
  new User({
    id: 2,
    name: "Rémi",
  }),
  new User({
    id: 3,
    name: "Alexandre",
  }),
  new User({
    id: 4,
    name: "Vincent",
  }),
  new User({
    id: 5,
    name: "Lucas",
  }),
  new User({
    id: 6,
    name: "Ludovic",
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
