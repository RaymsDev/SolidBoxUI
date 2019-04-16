import { IProject } from '../../../models/Project';

export interface IProjectSelectorProps {
  projectList: IProject[];
  projectIsFetching: boolean;
  onProjectSelected: (project: IProject) => void;
}
