import { Client } from "../../../models/Client";
import { Project } from "../../../models/Project";
import { Task } from "../../../models/Task";

export interface IProjectPageProps {
    clients: Client[];
    projects: Project[];
    tasks: Task[];
}
