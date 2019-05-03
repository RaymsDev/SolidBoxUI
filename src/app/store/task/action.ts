import { Action, Dispatch, Store } from 'redux';
import { ILink } from '../../models/Link';
import { ITask } from '../../models/Task';
import { ITaskService } from '../../services/task/ITask.service';

export enum TaskTypes {
  FETCH_TASKS = 'FETCH_TASKS',
  FETCH_TASKS_BY_LINK = 'FETCH_TASKS_BY_LINK',
  RECEIVE_TASKS = 'RECEIVE_TASKS',
  RECEIVE_TASKS_ERROR = 'RECEIVE_TASKS_ERROR',
}

export interface IFetchTasksAction extends Action {
  type: TaskTypes.FETCH_TASKS;
}
export interface IFetchTaskByLinkAction extends Action {
  type: TaskTypes.FETCH_TASKS_BY_LINK;
}

export interface IReceiveTasksAction extends Action {
  type: TaskTypes.RECEIVE_TASKS;
  tasks: ITask[];
}

export interface IReceiveErrorAction extends Action {
  type: TaskTypes.RECEIVE_TASKS_ERROR;
  errorMessage: string;
}

export type TasksActionTypes =
  | IFetchTasksAction
  | IFetchTaskByLinkAction
  | IReceiveTasksAction
  | IReceiveErrorAction;

export default class TaskActions {
  private store: Store;
  private taskService: ITaskService;
  constructor(store: Store, taskService: ITaskService) {
    this.store = store;
    this.taskService = taskService;
  }

  public fetch(): IFetchTasksAction {
    this.store.dispatch<any>(this.fetchAsync());
    return {
      type: TaskTypes.FETCH_TASKS,
    };
  }
  public fetchByLink(links: ILink[]): IFetchTaskByLinkAction {
    this.store.dispatch<any>(this.fetchByLinkAsync(links));
    return {
      type: TaskTypes.FETCH_TASKS_BY_LINK,
    };
  }

  public fetchByUniqueLink(links: ILink[]): IFetchTaskByLinkAction {
    this.store.dispatch<any>(this.fetchUniqueByLinkAsync(links));
    return {
      type: TaskTypes.FETCH_TASKS_BY_LINK,
    };
  }

  public receive(tasks: ITask[]): IReceiveTasksAction {
    return {
      type: TaskTypes.RECEIVE_TASKS,
      tasks,
    };
  }

  public receiveError(errorMessage: string): IReceiveErrorAction {
    return {
      type: TaskTypes.RECEIVE_TASKS_ERROR,
      errorMessage,
    };
  }

  public fetchAsync() {
    return (dispatch: Dispatch<Action>) => {
      return this.taskService
        .list()
        .then(tasks => {
          dispatch(this.receive(tasks));
        })
        .catch(error => {
          dispatch(this.receiveError(error));
        });
    };
  }

  public fetchByLinkAsync(links: ILink[]) {
    return (dispatch: Dispatch<Action>) => {
      return this.taskService
        .get(links)
        .then(tasks => {
          dispatch(this.receive(tasks));
        })
        .catch(error => {
          dispatch(this.receiveError(error));
        });
    };
  }

  public fetchUniqueByLinkAsync(links: ILink[]) {
    return (dispatch: Dispatch<Action>) => {
      return this.taskService
        .getUnique(links)
        .then(task => {
          dispatch(this.receive([task]));
        })
        .catch(error => {
          dispatch(this.receiveError(error));
        });
    };
  }
}
