import { Client, IClient } from "../../../models/Client";
import { Project } from "../../../models/Project";
import { Task } from "../../../models/Task";

export interface IProjectAndTaskByClientProps {
  // clients: Client[];
  // projects: Project[];
  // tasks: Task[];
  // onClientSelected: (client: IClient) => void;
  // onProjectExtend: (project: Project) => void;

  clientList: Client[];
  projectList: Project[];
  taskList: Task[];

  clientsIsFetching: boolean;
  projectsIsFetching: boolean;
  taskIsFetching: boolean;

  onClientSelected: (client: IClient) => void;
  onProjectSelected: (project: Project) => void;
}
