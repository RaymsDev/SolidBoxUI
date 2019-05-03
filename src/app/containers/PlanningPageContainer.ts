import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IPlanningPageProps } from '../components/pages/planningPage/IPlanningPageProps';
import { PlanningPage } from '../components/pages/planningPage/PlanningPage';
import { IAgency } from '../models/Agency';
import { IBranch } from '../models/Branch';
import { IClient } from '../models/Client';
import { IProject } from '../models/Project';
import { IProjectStatus } from '../models/ProjectStatus';
import { ITask } from '../models/Task';
import { ITeam } from '../models/Team';
import { IUser } from '../models/User';
import branchService from '../services/branch/branch.service';
import clientService from '../services/client/client.service';
import projectService from '../services/project/project.service';
import projectStatusService from '../services/projectStatus/projectStatus.service';
import taskService from '../services/task/task.service';
import teamService from '../services/team/team.service';
import userService from '../services/user/user.service';
import userTaskService from '../services/userTask/userTask.service';
import BranchActions from '../store/branch/action';
import { ClientActions } from '../store/client/action';
import ProjectActions from '../store/project/action';
import ProjectStatusActions from '../store/projectStatus/action';
import store, { IRootState } from '../store/store';
import TaskActions from '../store/task/action';
import TeamActions from '../store/team/action';
import UserActions from '../store/user/action';
import UserTaskActions from '../store/userTask/action';

const projectStatusActions = new ProjectStatusActions(
  store,
  projectStatusService,
);
const clientActions = new ClientActions(store, clientService);
const projectActions = new ProjectActions(store, projectService);
const taskActions = new TaskActions(store, taskService);
const branchActions = new BranchActions(store, branchService);
const teamActions = new TeamActions(store, teamService);
const userActions = new UserActions(store, userService);
const userTaskActions = new UserTaskActions(store, userTaskService);

const onClientSelected = (dispatch: Dispatch<any>, client: IClient) => {
  dispatch(projectActions.fetchClientProjects(client.links));
};

const onProjectStatusSelected = (
  dispatch: Dispatch<any>,
  projectStatus: IProjectStatus,
) => {
  console.log('STATUS SELECTED', projectStatus);
};

const onProjectSelected = (dispatch: Dispatch<any>, project: IProject) => {
  const { links } = project;
  dispatch(taskActions.fetchByLink(links));
};

const onTaskSelected = (dispatch: Dispatch<any>, task: ITask) => {
  console.error('Not Implemented');
};

const onAgencySelected = (dispatch: Dispatch<any>, agency: IAgency) => {
  dispatch(branchActions.fetchByLink(agency.links));
};

const onBranchSelected = (dispatch: Dispatch<any>, branch: IBranch) => {
  dispatch(teamActions.fetchByLink(branch.links));
};

const onTeamSelected = (dispatch: Dispatch<any>, team: ITeam) => {
  dispatch(userActions.fetchByLink(team.links));
};

const onUsersSelected = (dispatch: Dispatch<any>, users: IUser[]) => {
  dispatch(userActions.selectList(users));
  users.forEach(u => dispatch(userTaskActions.FetchByLink(u.links)));
};

const mapStateToProps = (state: IRootState): Partial<IPlanningPageProps> => {
  const {
    clients: clientList,
    isFetching: clientsIsFetching,
  } = state.clientsState;
  const {
    projects: projectList,
    isFetching: projectsIsFetching,
  } = state.projectsState;
  const {
    projectStatusList,
    isFetching: projectStatusIsFetching,
  } = state.projectStatusListState;
  const { tasks: taskList, isFetching: tasksIsFetching } = state.tasksState;
  const {
    agencies: agencyList,
    isFetching: agenciesIsFetching,
  } = state.agenciesState;
  const {
    branches: branchList,
    isFetching: branchesIsFetching,
  } = state.branchesState;
  const { teams: teamList, isFetching: teamsIsFetching } = state.teamsState;
  const {
    users: userList,
    selectedList: userSelectedList,
    isFetching: usersIsFetching,
  } = state.usersState;

  const {
    userTasks: userTaskList,
    isFetching: userTasksIsFetching,
  } = state.userTasksState;

  return {
    clientList,
    clientsIsFetching,
    projectList,
    projectsIsFetching,
    projectStatusList,
    projectStatusIsFetching,
    tasksIsFetching,
    taskList,

    agencyList,
    agenciesIsFetching,

    branchList,
    branchesIsFetching,

    teamList,
    teamsIsFetching,

    userList,
    userSelectedList,
    usersIsFetching,

    userTaskList,
    userTasksIsFetching,
  };
};

// init
store.dispatch(clientActions.fetchClients());

const mapDispatchToProps = (
  dispatch: Dispatch<any>,
): Partial<IPlanningPageProps> => {
  return {
    onClientSelected: (client: IClient) => {
      onClientSelected(dispatch, client);
    },
    onProjectStatusSelect: (projectStatus: IProjectStatus) => {
      onProjectStatusSelected(dispatch, projectStatus);
    },
    onProjectSelected: project => {
      onProjectSelected(dispatch, project);
    },
    onTaskSelected: task => {
      onTaskSelected(dispatch, task);
    },
    onAgencySelected: agency => {
      onAgencySelected(dispatch, agency);
    },
    onBranchSelected: branch => {
      onBranchSelected(dispatch, branch);
    },
    onTeamSelected: team => {
      onTeamSelected(dispatch, team);
    },
    onUsersSelected: users => {
      onUsersSelected(dispatch, users);
    },
  };
};

export default connect<Partial<IPlanningPageProps>>(
  mapStateToProps,
  mapDispatchToProps,
)(PlanningPage);
