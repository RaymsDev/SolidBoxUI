import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { AuthActionTypes } from "./auth/action";
import { authReducer } from "./auth/reducer";
import { IAuthState } from "./auth/type";
import { ClientsActionTypes } from "./client/action";
import { clientsReducer } from "./client/reducer";
import { IClientsState } from "./client/types";
import { ProjectsActionTypes } from "./project/action";
import { projectReducer } from "./project/reducer";
import { IProjectsState } from "./project/type";
import { TasksActionTypes } from "./task/action";
import { taskReducer } from "./task/reducer";
import { ITasksState } from "./task/types";
import { TodoActionTypes } from "./todo/action";
import { todosReducer } from "./todo/reducer";
import { ITodosState } from "./todo/types";

// devtool
import { composeWithDevTools } from 'redux-devtools-extension';

export interface IRootState {
  todosState: ITodosState;
  clientsState: IClientsState;
  projectsState: IProjectsState;
  tasksState: ITasksState;
  authState: IAuthState;
}

export type IRootAction =
  | ClientsActionTypes
  | TodoActionTypes
  | ProjectsActionTypes
  | TasksActionTypes
  | AuthActionTypes;

const reducers = combineReducers<IRootState>({
  todosState: todosReducer,
  clientsState: clientsReducer,
  projectsState: projectReducer,
  tasksState: taskReducer,
  authState: authReducer
});

const store = createStore(reducers,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<IRootState, IRootAction>)
  )
);
export default store;
