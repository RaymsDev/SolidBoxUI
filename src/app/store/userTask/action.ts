import { Action, Dispatch, Store } from 'redux';
import { ILink } from '../../models/Link';
import { IUserTask } from '../../models/UserTask';
import { IUserTaskService } from '../../services/userTask/IUserTask.service';

export enum UserTaskTypes {
  FETCH = 'FETCH_USERTASKS',
  FETCH_BY_LINK = 'FETCH_USERTASK_BY_LINK',
  RECEIVE = 'RECEIVE_USERTASK',
  RECEIVE_ERROR = 'RECEIVE_ERROR_USERTASK',
}

export interface IFetchAction extends Action {
  type: UserTaskTypes.FETCH;
}
export interface IFetchByLinkAction extends Action {
  type: UserTaskTypes.FETCH_BY_LINK;
}

export interface IReceiveAction extends Action {
  type: UserTaskTypes.RECEIVE;
  userTasks: IUserTask[];
}

export interface IReceiveErrorAction extends Action {
  type: UserTaskTypes.RECEIVE_ERROR;
  errorMessage: string;
}

export type UserTasksActionTypes =
  | IFetchAction
  | IFetchByLinkAction
  | IReceiveAction
  | IReceiveErrorAction;

export default class TaskActions {
  private store: Store;
  private userTaskService: IUserTaskService;
  constructor(store: Store, userTaskService: IUserTaskService) {
    this.store = store;
    this.userTaskService = userTaskService;
  }

  public fetch(): IFetchAction {
    this.store.dispatch<any>(this.fetchAsync());
    return {
      type: UserTaskTypes.FETCH,
    };
  }
  public fetchByLink(links: ILink[]): IFetchByLinkAction {
    this.store.dispatch<any>(this.fetchByLinkAsync(links));
    return {
      type: UserTaskTypes.FETCH_BY_LINK,
    };
  }

  public receive(userTasks: IUserTask[]): IReceiveAction {
    return {
      type: UserTaskTypes.RECEIVE,
      userTasks,
    };
  }

  public receiveError(errorMessage: string): IReceiveErrorAction {
    return {
      type: UserTaskTypes.RECEIVE_ERROR,
      errorMessage,
    };
  }

  public fetchAsync() {
    return (dispatch: Dispatch<Action>) => {
      return this.userTaskService
        .List()
        .then(userTasks => {
          dispatch(this.receive(userTasks));
        })
        .catch(error => {
          dispatch(this.receiveError(error));
        });
    };
  }

  public fetchByLinkAsync(links: ILink[]) {
    return (dispatch: Dispatch<Action>) => {
      return this.userTaskService
        .Get(links)
        .then(userTasks => {
          dispatch(this.receive(userTasks));
        })
        .catch(error => {
          dispatch(this.receiveError(error));
        });
    };
  }
}
