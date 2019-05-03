import * as React from 'react';
import PageTemplateContainer from '../../../containers/PageTemplateContainer';
import { ITaskSelectorProps } from '../../atoms/taskSelector/ITaskSelectorProps';
import { TaskSelector } from '../../atoms/taskSelector/TaskSelector';
import { ITimelineProps } from '../../molecules/timeline/ITimelineProps';
import { Timeline } from '../../molecules/timeline/Timeline';
import { IUserSelectorProps } from '../../molecules/userSelector/IUserSelectorProps';
import { UserSelector } from '../../molecules/userSelector/UserSelector';
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
      projectList: this.props.projectList,
      projectIsFetching: this.props.projectsIsFetching,
      onProjectSelected: this.props.onProjectSelected,

      taskList: this.props.taskList,
      taskIsFetching: this.props.tasksIsFetching,
      onTaskSelected: this.props.onTaskSelected,
    };

    const userSelectorProps: IUserSelectorProps = {
      agencyList: this.props.agencyList,
      agencyIsFetching: this.props.agenciesIsFetching,
      onAgencySelected: this.props.onAgencySelected,

      branchList: this.props.branchList,
      branchIsFetching: this.props.branchesIsFetching,
      onBranchSelected: this.props.onBranchSelected,

      teamList: this.props.teamList,
      teamIsFetching: this.props.teamsIsFetching,
      onTeamSelected: this.props.onTeamSelected,

      userList: this.props.userList,
      userIsFetching: this.props.usersIsFetching,
      onUsersSelected: this.props.onUsersSelected,
    };

    const timelineProps: ITimelineProps = {
      userTaskList: this.props.userTaskList,
      userList: this.props.userSelectedList,
      taskList: this.props.taskList,
    };

    return (
      <PageTemplateContainer>
        <h1>Planning</h1>
        <ProjectSelector {...projectSelectProps} />
        <TaskSelector {...taskSelectorProps} />
        <UserSelector {...userSelectorProps} />
        <Timeline {...timelineProps} />
      </PageTemplateContainer>
    );
  }
}
