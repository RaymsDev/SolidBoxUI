import { Client } from '../../../models/Client';
import { Project } from '../../../models/Project';
import { Task } from '../../../models/Task';

export interface IClientCardProps {
  client: Client;
  projects: Project[];
  tasks: Task[];
}
