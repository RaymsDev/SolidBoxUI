import { Client, IClient } from "../../../models/Client";
import { IProject, Project } from "../../../models/Project";
import { ITask, Task } from "../../../models/Task";

export interface IProjectPageProps {
  clientList: Client[];
  projectList: Project[];
  taskList: Task[];

  clientsIsFetching: boolean;
  projectsIsFetching: boolean;
  taskIsFetching: boolean;

  onClientSelected: (client: IClient) => void;
  onProjectSelected: (project: Project) => void;
}
