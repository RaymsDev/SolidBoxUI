import { Client, IClient } from '../../../models/Client';
import { Project } from '../../../models/Project';
import { Task } from '../../../models/Task';

export interface IClientCardProps {
  client: Client;
  projects: Project[];
  tasks: Task[];

  onClientSelected: (client: Client) => void;
  onProjectSelected: (project: Project) => void;
}
