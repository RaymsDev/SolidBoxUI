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
import { ProjectModesActionTypes } from "./projectMode/action";
import { projectModeReducer } from "./projectMode/reducer";
import { IProjectModesState } from "./projectMode/type";
import { ProjectStatussActionTypes } from "./projectStatus/action";
import { projectStatusReducer } from "./projectStatus/reducer";
import { IProjectStatussState } from "./projectStatus/type";
import { TodoActionTypes } from "./todo/action";
import { todosReducer } from "./todo/reducer";
import { ITodosState } from "./todo/types";

// devtool
import { composeWithDevTools } from 'redux-devtools-extension';

export interface IRootState {
  todosState: ITodosState;
  clientsState: IClientsState;
  projectsState: IProjectsState;
  authState: IAuthState;
  projectModesState: IProjectModesState;
  projectStatussState: IProjectStatussState;
}

export type IRootAction =
  | ClientsActionTypes
  | TodoActionTypes
  | ProjectsActionTypes
  | ProjectModesActionTypes
  | AuthActionTypes;

const reducers = combineReducers<IRootState>({
  todosState: todosReducer,
  clientsState: clientsReducer,
  projectsState: projectReducer,
  authState: authReducer,
  projectModesState: projectModeReducer,
  projectStatussState: projectStatusReducer,
});

const store = createStore(reducers,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<IRootState, IRootAction>)
  )
);
export default store;
