import { Action, Dispatch, Store } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ILink } from '../../models/Link';
import { Project } from '../../models/Project';
import { IProjectService } from '../../services/project/IProject.service';
import { IProjectsState } from './type';

export enum ProjectTypes {
  FETCH_PROJECTS = 'FETCH_PROJECTS',
  FETCH_CLIENT_PROJECTS = 'FETCH_CLIENT_PROJECTS',
  RECEIVE_PROJECTS = 'RECEIVE_PROJECTS',
  RECEIVE_ERROR = 'RECEIVE_ERROR',
  CREATE = 'CREATE_PROJECT',
  SAVE = 'SAVE_PROJECT',
  ADD = "ADD_PROJECTS",
  EDIT = "EDIT_PROJECT",
}

export interface IFetchProjectsAction extends Action {
  type: ProjectTypes.FETCH_PROJECTS;
}
export interface IFetchClientProjectsAction extends Action {
  type: ProjectTypes.FETCH_CLIENT_PROJECTS;
}

export interface IReceiveProjectsAction extends Action {
  type: ProjectTypes.RECEIVE_PROJECTS;
  projects: Project[];
}

export interface IAddProjectsAction extends Action {
  type: ProjectTypes.ADD;
  projects: Project[];
}

export interface IEditProjectsAction extends Action {
  type: ProjectTypes.EDIT;
  projects: Project[];
}

export interface IReceiveErrorAction extends Action {
  type: ProjectTypes.RECEIVE_ERROR;
  errorMessage: string;
}

export type ProjectThunkResult<R> = ThunkAction<
  R,
  IProjectsState,
  undefined,
  Action
>;

export type ProjectsActionTypes =
  | IFetchProjectsAction
  | IFetchClientProjectsAction
  | IReceiveProjectsAction
  | IReceiveErrorAction
  | IAddProjectsAction
  | IEditProjectsAction;

export default class ProjectActions {
  private store: Store;
  private projectService: IProjectService;
  constructor(store: Store, projectService: IProjectService) {
    this.store = store;
    this.projectService = projectService;
  }

  public fetchProjects(): IFetchProjectsAction {
    this.store.dispatch<any>(this.fetchProjectsAsync());
    return {
      type: ProjectTypes.FETCH_PROJECTS,
    };
  }

  public fetchClientProjects(links: ILink[]): IFetchClientProjectsAction {
    this.store.dispatch<any>(this.fetchClientProjectsAsync(links));
    return {
      type: ProjectTypes.FETCH_CLIENT_PROJECTS,
    };
  }

  public receiveProjects(projects: Project[]): IReceiveProjectsAction {
    return {
      type: ProjectTypes.RECEIVE_PROJECTS,
      projects,
    };
  }

  public receiveError(errorMessage: string): IReceiveErrorAction {
    return {
      type: ProjectTypes.RECEIVE_ERROR,
      errorMessage,
    };
  }

  public fetchProjectsAsync() {
    return (dispatch: Dispatch<Action>) => {
      return this.projectService
        .getProjects()
        .then(projects => {
          dispatch(this.receiveProjects(projects));
        })
        .catch(error => {
          dispatch(this.receiveError(error));
        });
    };
  }

  public fetchClientProjectsAsync(links: ILink[]) {
    return (dispatch: Dispatch<Action>) => {
      return this.projectService
        .get(links)
        .then(projects => {
          dispatch(this.receiveProjects(projects));
        })
        .catch(error => {
          dispatch(this.receiveError(error));
        });
    };
  }

  public create(project: Project) {
    this.store.dispatch<any>(this.createAsync(project));
    return {
      type: ProjectTypes.CREATE,
    };
  }

  public createAsync(project: Project) {
    return (dispatch: Dispatch<Action>) => {
      return this.projectService
        .create(project)
        .then(p => this.addProjects([p]))
        .catch(error => {
          dispatch(this.receiveError(error));
        });
    };
  }

  public addProjects(projects: Project[]) {
    return {
      type: ProjectTypes.ADD,
      projects,
    };
  }

  public save(project: Project) {
    this.store.dispatch<any>(this.saveAsync(project));
    return {
      type: ProjectTypes.SAVE,
    };
  }

  public saveAsync(project: Project) {
    return (dispatch: Dispatch<Action>) => {
      return this.projectService
        .save(project)
        .then(p => this.editProjects([p]))
        .catch(error => {
          dispatch(this.receiveError(error));
        });
    };
  }

  public editProjects(projects: Project[]) {
    return {
      type: ProjectTypes.EDIT,
      projects,
    };
  }
}
