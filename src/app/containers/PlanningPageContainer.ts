import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IPlanningPageProps } from '../components/pages/planningPage/IPlanningPageProps';
import { PlanningPage } from '../components/pages/planningPage/PlanningPage';
import { IClient } from '../models/Client';
import { IProject, Project } from '../models/Project';
import { IProjectStatus } from '../models/ProjectStatus';
import clientService from '../services/client/client.service';
import projectService from '../services/project/project.service';
import projectStatusService from '../services/projectStatus/projectStatus.service';
import taskService from '../services/task/task.service';
import { ClientActions } from '../store/client/action';
import ProjectActions from '../store/project/action';
import ProjectStatusActions from '../store/projectStatus/action';
import store, { IRootState } from '../store/store';
import TaskActions from '../store/task/action';
import { ITask } from '../models/Task';

const projectStatusActions = new ProjectStatusActions(
  store,
  projectStatusService,
);
const clientActions = new ClientActions(store, clientService);
const projectActions = new ProjectActions(store, projectService);
const taskActions = new TaskActions(store, taskService);

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
  console.info('TASK SELECTED', task);
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
  return {
    clientList,
    clientsIsFetching,
    projectList,
    projectsIsFetching,
    projectStatusList,
    projectStatusIsFetching,
    tasksIsFetching,
    taskList,
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
  };
};

export default connect<Partial<IPlanningPageProps>>(
  mapStateToProps,
  mapDispatchToProps,
)(PlanningPage);
