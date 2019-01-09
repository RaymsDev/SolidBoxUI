import { IClient } from "../../../models/Client";
import { Project } from "../../../models/Project";

export interface IPlanningPageProps {
  clientList: IClient[];
  clientsIsFetching: boolean;
  projectList: Project[];
  projectsIsFetching: boolean;
  onClientSelected: (client: IClient) => void;
  onProjectSelected: (project: Project) => void;
}
