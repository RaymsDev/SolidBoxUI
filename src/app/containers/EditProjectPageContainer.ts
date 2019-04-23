import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { EditProjectPage } from '../components/pages/editProjectPage/EditProjectPage';
import { IEditProjectPageProps } from '../components/pages/editProjectPage/IEditProjectPageProps';
import agencyService from '../services/agency/agency.service';
import branchService from '../services/branch/branch.service';
import clientService from '../services/client/client.service';
import projectService from '../services/project/project.service';
import projectModeService from '../services/projectMode/projectMode.service';
import projectStatusService from '../services/projectStatus/projectStatus.service';
import teamService from '../services/team/team.service';
import userService from '../services/user/user.service';
import AgencyActions from '../store/agency/action';
import BranchActions from '../store/branch/action';
import { ClientActions } from '../store/client/action';
import ProjectActions from '../store/project/action';
import ProjectModeActions from '../store/projectMode/action';
import ProjectStatusActions from '../store/projectStatus/action';
import store, { IRootState } from '../store/store';
import TeamActions from '../store/team/action';
import UserActions from '../store/user/action';

const projectActions = new ProjectActions(store, projectService);
const projectModeActions = new ProjectModeActions(store, projectModeService);
const projectStatusActions = new ProjectStatusActions(
  store,
  projectStatusService,
);
const userActions = new UserActions(store, userService);
const clientActions = new ClientActions(store, clientService);
const teamActions = new TeamActions(store, teamService);
const branchActions = new BranchActions(store, branchService);
const agencyActions = new AgencyActions(store, agencyService);

const mapStateToProps = (state: IRootState): Partial<IEditProjectPageProps> => {
  const {
    projectModes,
    isFetching: isFetchingProjectMode,
  } = state.projectModesState;
  const {
    projectStatusList,
    isFetching: isFetchingProjectStatus,
  } = state.projectStatusListState;
  const { projects, isFetching: isFetchingProject } = state.projectsState;
  const { users, isFetching: isFetchingUser } = state.usersState;
  const {
    agencies: agenciesNormalized,
    isFetching: isFetchingAgency,
  } = state.agenciesState;
  const {
    branches: branchs,
    isFetching: isFetchingBranch,
  } = state.branchesState;
  const { teams, isFetching: isFetchingTeam } = state.teamsState;
  const { clients, isFetching: isFetchingClient } = state.clientsState;
  return {
    listProjectMode: projectModes,
    listProjectStatus: projectStatusList,
    listUser: users,
    agenciesNormalized,
    listBranch: branchs,
    listTeam: teams,
    listClient: clients,
    listProject: projects,
    isFetching:
      isFetchingAgency ||
      isFetchingProject ||
      isFetchingUser ||
      isFetchingProjectMode ||
      isFetchingProjectStatus ||
      isFetchingBranch ||
      isFetchingTeam ||
      isFetchingClient,
    isFetchingMessage:
      'Waiting for the ' +
      (() => {
        if (isFetchingAgency) {
          return 'agency';
        }
        if (isFetchingProject) {
          return 'project';
        }
        if (isFetchingUser) {
          return 'user';
        }
        if (isFetchingProjectMode) {
          return 'project mode';
        }
        if (isFetchingProjectStatus) {
          return 'project status';
        }
        if (isFetchingBranch) {
          return 'branch';
        }
        if (isFetchingTeam) {
          return 'team';
        }
        if (isFetchingClient) {
          return 'client';
        }
      })(),
  };
};

// init
store.dispatch(projectActions.fetchProjects());
store.dispatch(projectModeActions.fetch());
store.dispatch(projectStatusActions.fetch());
store.dispatch(userActions.fetch());
store.dispatch(clientActions.fetchClients());
store.dispatch(teamActions.fetch());
store.dispatch(branchActions.fetch());
store.dispatch(agencyActions.fetch());

const mapDispatchToProps = (
  dispatch: Dispatch<any>,
): Partial<IEditProjectPageProps> => {
  return {
    onDelete: (): void => {
      alert('You cannot delete a project');
    },
    onSave: (): void => {
      dispatch(projectActions.saveEdited());
    },
    onCreate: (): void => {
      dispatch(projectActions.createEdited());
    },
  };
};

export default connect<Partial<IEditProjectPageProps>>(
  mapStateToProps,
  mapDispatchToProps,
)(EditProjectPage);
