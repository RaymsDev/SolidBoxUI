import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { EditProjectPage } from '../components/pages/editProjectPage/EditProjectPage';
import { IEditProjectPageProps } from '../components/pages/editProjectPage/IEditProjectPageProps';
import { Project } from '../models/Project';
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
  const { projectModes } = state.projectModesState;
  const { projectStatusList } = state.projectStatusListState;
  const { edited, projects } = state.projectsState;
  const { users } = state.usersState;
  const { agencys } = state.agencysState;
  const { branchs } = state.branchsState;
  const { teams } = state.teamsState;
  const { clients } = state.clientsState;
  return {
    newProject: edited,
    listProjectMode: projectModes,
    listProjectStatus: projectStatusList,
    listUser: users.filter(u => u.teamId === edited.teamId),
    listAgency: agencys,
    listBranch: branchs.filter(b => b.agencyId === edited.agencyId),
    listTeam: teams.filter(t => t.branchId === edited.branchId),
    listClient: clients,
    listProject: projects.filter(p => p.clientId === edited.clientId),
  };
};

// init
store.dispatch(projectActions.fetchProjects());
store.dispatch(projectActions.newEdited());
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
    onChangeProperty: (property: keyof Project): ((newValue: any) => void) => {
      return (newValue: any): void => {
        dispatch(projectActions.updateEdited(property, newValue));
      };
    },
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
