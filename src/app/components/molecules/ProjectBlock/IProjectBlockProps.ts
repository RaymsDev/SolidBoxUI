import { Project } from "../../../models/Project";
import { Task } from "../../../models/Task";

export interface IProjectBlockProps {
  project: Project;
  tasks: Task[];

  onProjectSelected: (project: Project) => void;
}
