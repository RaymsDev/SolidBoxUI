import { Action, Dispatch, Store } from 'redux';
import { ILink } from '../../models/Link';
import { IUserTask } from '../../models/UserTask';
import taskService from '../../services/task/task.service';
import { IUserTaskService } from '../../services/userTask/IUserTask.service';
import TaskActions from '../task/action';

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

export default class UserTaskActions {
  private store: Store;
  private userTaskService: IUserTaskService;
  constructor(store: Store, userTaskService: IUserTaskService) {
    this.store = store;
    this.userTaskService = userTaskService;
  }

  public Fetch(): IFetchAction {
    this.store.dispatch<any>(this.fetchAsync());
    return {
      type: UserTaskTypes.FETCH,
    };
  }
  public FetchByLink(links: ILink[]): IFetchByLinkAction {
    this.store.dispatch<any>(this.fetchByLinkAsync(links));
    return {
      type: UserTaskTypes.FETCH_BY_LINK,
    };
  }

  public Receive(userTasks: IUserTask[]): IReceiveAction {
    const taskActions = new TaskActions(this.store, taskService);

    // TODO : improve perfs
    userTasks.forEach(ut =>
      this.store.dispatch<any>(taskActions.fetchByUniqueLink(ut.links)),
    );

    return {
      type: UserTaskTypes.RECEIVE,
      userTasks,
    };
  }

  public ReceiveError(errorMessage: string): IReceiveErrorAction {
    return {
      type: UserTaskTypes.RECEIVE_ERROR,
      errorMessage,
    };
  }

  private fetchAsync() {
    return (dispatch: Dispatch<Action>) => {
      return this.userTaskService
        .List()
        .then(userTasks => {
          dispatch(this.Receive(userTasks));
        })
        .catch(error => {
          dispatch(this.ReceiveError(error));
        });
    };
  }

  private fetchByLinkAsync(links: ILink[]) {
    return (dispatch: Dispatch<Action>) => {
      return this.userTaskService
        .Get(links)
        .then(userTasks => {
          dispatch(this.Receive(userTasks));
        })
        .catch(error => {
          dispatch(this.ReceiveError(error));
        });
    };
  }
}
