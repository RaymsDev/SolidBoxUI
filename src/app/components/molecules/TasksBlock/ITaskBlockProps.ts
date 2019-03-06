import { Project } from "../../../models/Project";
import { Task } from "../../../models/Task";

export interface ITaskBlockProps {
  projectLoaderId: number;
  tasks: Task[];
}
