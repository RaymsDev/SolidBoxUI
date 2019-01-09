import { IClient } from "../../../models/Client";
import { Project } from "../../../models/Project";

export interface ITaskSelectorProps {
  clientList: IClient[];
  clientsIsFetching: boolean;
  onClientSelected: (client: IClient) => void;
  projectList: Project[];
  projectsIsFetching: boolean;
  onProjectSelected: (project: Project) => void;
}
