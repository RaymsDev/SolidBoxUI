import { Action, Dispatch, Store } from "redux";
import { ThunkAction } from "redux-thunk";
import { ITask } from "../../models/Task";
import { ITaskService } from "../../services/task/ITask.service";
import { ITasksState } from "./types";

export enum TaskTypes {
  FETCH_TASKS = 'FETCH_TASKS',
  RECEIVE_TASKS = 'RECEIVE_TASK',
  RECEIVE_ERROR = 'RECEIVE_ERROR'
}

export interface IFetchTasksAction extends Action {
  type: TaskTypes.FETCH_TASKS;
}

export interface IReceiveTasksAction extends Action {
  type: TaskTypes.RECEIVE_TASKS;
  tasks: ITask[];
}

export interface IReceiveErrorAction extends Action {
  type: TaskTypes.RECEIVE_ERROR;
  errorMessage: string;
}

export type TaskThunkResult<R> = ThunkAction<R, ITasksState, undefined, Action>;

export type TasksActionTypes =
  | IFetchTasksAction
  | IReceiveTasksAction
  | IReceiveErrorAction;

export class TaskActions {
  private store: Store;
  private taskService: ITaskService;

  constructor(store: Store, taskService: ITaskService, ) {
    this.taskService = taskService;
    this.store = store;
  }

  public fetchTasks(): IFetchTasksAction {
    this.store.dispatch<any>(this.fetchTasksAsync());
    return {
      type: TaskTypes.FETCH_TASKS,
    };
  }

  public receiveTasks(tasks: ITask[]): IReceiveTasksAction {
    return {
      type: TaskTypes.RECEIVE_TASKS,
      tasks
    };
  }

  public receiveError(errorMessage: string): IReceiveErrorAction {
    return {
      type: TaskTypes.RECEIVE_ERROR,
      errorMessage
    };
  }

  public fetchTasksAsync() {
    return (dispatch: Dispatch<Action>) => {
      return this.taskService.getTasks()
        .then((tasks) => {
          dispatch(this.receiveTasks(tasks));
        })
        .catch((error) => {
          dispatch(this.receiveError(error));
        });
    };
  }

}
