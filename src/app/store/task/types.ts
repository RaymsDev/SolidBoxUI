import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ITask } from "../../models/Task";

export interface ITasksState {
  tasks: ITask[];
  isFetching: boolean;
  isError: boolean;
  errorMessage: string;
}
