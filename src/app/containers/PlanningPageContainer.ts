import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IPlanningPageProps } from "../components/pages/planningPage/IPlanningPageProps";
import { PlanningPage } from "../components/pages/planningPage/PlanningPage";
import { IClient } from "../models/Client";
import { Project } from "../models/Project";
import clientService from "../services/client/client.service";
import projectService from "../services/project/project.service";
import { ClientActions } from "../store/client/action";
import ProjectActions from "../store/project/action";
import store, { IRootState } from "../store/store";
const clientActions = new ClientActions(store, clientService);
const projectActions = new ProjectActions(store, projectService);

const onClientSelected = (dispatch: Dispatch<any>, client: IClient) => {
  dispatch(projectActions.fetchClientProjects(client.links));
};

const mapStateToProps = (state: IRootState): Partial<IPlanningPageProps> => {
  const { clients } = state.clientsState;
  const { projects } = state.projectsState;
  return {
    clientList: clients,
    clientsIsFetching: state.clientsState.isFetching,
    projectList: projects,
    projectsIsFetching: state.projectsState.isFetching
  };
};

// init
store.dispatch(clientActions.fetchClients());

const mapDispatchToProps = (dispatch: Dispatch<any>): Partial<IPlanningPageProps> => {
  return {
    onClientSelected: (client: IClient) => { onClientSelected(dispatch, client); },
    onProjectSelected: (project: Project) => {
      console.log(project);
    }
  };
};

export default connect<Partial<IPlanningPageProps>>(mapStateToProps, mapDispatchToProps)(PlanningPage);
