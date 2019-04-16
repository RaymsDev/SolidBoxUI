import * as React from 'react';

import PageTemplateContainer from '../../../containers/PageTemplateContainer';
import { IProjectSelectorProps } from '../../atoms/projectSelector/IProjectSelectorProps';
import { ProjectSelector } from '../../atoms/projectSelector/ProjectSelector';
import { ITaskSelectorProps } from '../../organisms/taskSelector/ITaskSelectorProps';
import { TaskSelector } from '../../organisms/taskSelector/TaskSelector';
import { IPlanningPageProps } from './IPlanningPageProps';
export class PlanningPage extends React.Component<IPlanningPageProps> {
  constructor(props: IPlanningPageProps) {
    super(props);
  }

  public render(): JSX.Element {
    const taskSelectProps: ITaskSelectorProps = {
      clientList: this.props.clientList,
      clientsIsFetching: this.props.clientsIsFetching,
      onClientSelected: this.props.onClientSelected,
    };

    const projectSelectorProps: IProjectSelectorProps = {
      onProjectSelected: this.props.onProjectSelected,
      projectList: this.props.projectList,
      projectIsFetching: this.props.projectsIsFetching,
      onTaskSelected: this.props.onTaskSelected,
      taskList: this.props.taskList,
      taskIsFetching: this.props.tasksIsFetching,
    };

    return (
      <PageTemplateContainer>
        <h1>Planning</h1>
        <TaskSelector {...taskSelectProps} />
        <ProjectSelector {...projectSelectorProps} />
      </PageTemplateContainer>
    );
  }
}
