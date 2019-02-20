import { Dispatch } from "react";
import { connect } from "react-redux";
import { IProjectAndTaskByClientProps } from "../components/organisms/projectAndTaskByClient/IProjectAndTaskByClientProps";
import { IProjectPageProps } from "../components/pages/projectPage/IProjectPageProps";
import { ProjectPage } from "../components/pages/projectPage/ProjectPage";
import { IClient } from "../models/Client";
import { Project } from "../models/Project";
import { IProject } from "../models/Project";
import { ITask } from "../models/Task";
import clientService from "../services/client/client.service";
import projectService from "../services/project/project.service";
import taskService from "../services/task/task.service";
import { ClientActions } from "../store/client/action";
import ProjectActions from "../store/project/action";
import store, { IRootState } from "../store/store";
import { TaskActions } from "../store/task/action";

const clientActions = new ClientActions(store, clientService);
const projectActions = new ProjectActions(store, projectService);
const taskActions = new TaskActions(store, taskService);

const onClientSelected = (dispatch: Dispatch<any>, client: IClient) => {
  dispatch(projectActions.fetchClientProjects(client.links));
  // console.log("CLIENT CLICK MFC");
};

const onProjectSelected = (dispatch: Dispatch<any>, project: IProject) => {
  dispatch(projectActions.fetchClientProjects(project.links));
};

// cont onTaskSelected = (dispatch: Dispatch<any>, task: ITask) => {
//   dispatch(taskActions.fetchTasks());
// };

const mapStateToProps = (state: IRootState): Partial<IProjectPageProps> => {
  const { clients } = state.clientsState;
  const { projects } = state.projectsState;
  const { tasks } = state.tasksState;
  return {
    clientList: clients,
    clientsIsFetching: state.clientsState.isFetching,
    projectList: projects,
    projectsIsFetching: state.projectsState.isFetching

  };
};

// init
store.dispatch(clientActions.fetchClients());

const mapDispatchToProps = (dispatch: Dispatch<any>): Partial<IProjectPageProps> => {
  return {
    onClientSelected: (client: IClient) => {
      console.log("Client selected :" + client);
    },
    onProjectSelected: (project: Project) => {
      console.log("Project selected :" + project);
    }
  };
};

export default connect<Partial<IProjectPageProps>>(mapStateToProps, mapDispatchToProps)(ProjectPage);
