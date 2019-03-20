import { connect } from "react-redux";
import { Dispatch } from "redux";
import { EditProjectPage } from "../components/pages/editProjectPage/EditProjectPage";
import { IEditProjectPageProps } from "../components/pages/editProjectPage/IEditProjectPageProps";
import { Project } from "../models/Project";
import agencyService from "../services/agency/agencyFake.service";// todo remove fake when service will be done
import branchService from "../services/branch/branchFake.service";// todo remove fake when service will be done
import clientService from "../services/client/client.service";
import projectService from "../services/project/project.service";
import projectModeService from "../services/projectMode/projectMode.service";
import projectStatusService from "../services/projectStatus/projectStatus.service";
import teamService from "../services/team/teamFake.service";// todo remove fake when service will be done
import userService from "../services/user/userFake.service";// todo remove fake when service will be done
import AgencyActions from "../store/agency/action";
import BranchActions from "../store/branch/action";
import { ClientActions } from "../store/client/action";
import ProjectActions from "../store/project/action";
import ProjectModeActions from "../store/projectMode/action";
import ProjectStatusActions from "../store/projectStatus/action";
import store, { IRootState } from "../store/store";
import TeamActions from "../store/team/action";
import UserActions from "../store/user/action";

const projectActions = new ProjectActions(store, projectService);
const projectModeActions = new ProjectModeActions(store, projectModeService);
const projectStatusActions = new ProjectStatusActions(store, projectStatusService);
const userActions = new UserActions(store, userService);
const clientActions = new ClientActions(store, clientService);
const teamActions = new TeamActions(store, teamService);
const branchActions = new BranchActions(store, branchService);
const agencyActions = new AgencyActions(store, agencyService);

const mapStateToProps = (state: IRootState): Partial<IEditProjectPageProps> => {
  const { projectModes } = state.projectModesState;
  const { projectStatuss } = state.projectStatussState;
  const { edited, projects } = state.projectsState;
  const { users } = state.usersState;
  const { agencys } = state.agencysState;
  const { branchs } = state.branchsState;
  const { teams } = state.teamsState;
  const { clients } = state.clientsState;
  return {
    newProject: edited,
    listProjectMode: projectModes,
    listProjectStatus: projectStatuss,
    listUser: users,
    listAgency: agencys,
    listBranch: branchs,
    listTeam: teams,
    listClient: clients,
    listProject: projects.filter((p) => p.clientId === edited.clientId),
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

const mapDispatchToProps = (dispatch: Dispatch<any>): Partial<IEditProjectPageProps> => {
  return {
    onChangeProperty: (property: keyof Project): (newValue: any) => void => {
      return (newValue: any): void => {
        dispatch(projectActions.updateEdited(property, newValue));
      };
    },
  };
};

export default connect<Partial<IEditProjectPageProps>>(mapStateToProps, mapDispatchToProps)(EditProjectPage);
