import { Link } from "../../models/Link";
import { Task } from "../../models/Task";

export interface ITaskService {
  get(links: Link[]): Promise<Task[]>;
  getTasks(): Promise<Task[]>;
}
