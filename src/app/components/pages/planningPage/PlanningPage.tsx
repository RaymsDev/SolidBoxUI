import * as React from 'react';

import PageTemplateContainer from '../../../containers/PageTemplateContainer';
import { ITaskSelectorProps } from '../../atoms/taskSelector/ITaskSelectorProps';
import { TaskSelector } from '../../atoms/taskSelector/TaskSelector';
import { IPRojectSelectorProps } from '../../organisms/projectSelector/IProjectSelectorProps';
import { ProjectSelector } from '../../organisms/projectSelector/ProjectSelector';
import { IPlanningPageProps } from './IPlanningPageProps';
export class PlanningPage extends React.Component<IPlanningPageProps> {
  constructor(props: IPlanningPageProps) {
    super(props);
  }

  public render(): JSX.Element {
    const projectSelectProps: IPRojectSelectorProps = {
      clientList: this.props.clientList,
      clientsIsFetching: this.props.clientsIsFetching,
      onClientSelected: this.props.onClientSelected,
    };

    const taskSelectorProps: ITaskSelectorProps = {
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
        <ProjectSelector {...projectSelectProps} />
        <TaskSelector {...taskSelectorProps} />
      </PageTemplateContainer>
    );
  }
}
