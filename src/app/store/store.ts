import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { AgencysActionTypes } from "./agency/action";
import { agencyReducer } from "./agency/reducer";
import { IAgencysState } from "./agency/type";
import { AuthActionTypes } from "./auth/action";
import { authReducer } from "./auth/reducer";
import { IAuthState } from "./auth/type";
import { BranchsActionTypes } from "./branch/action";
import { branchReducer } from "./branch/reducer";
import { IBranchsState } from "./branch/type";
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
import { TeamsActionTypes } from "./team/action";
import { teamReducer } from "./team/reducer";
import { ITeamsState } from "./team/type";
import { TodoActionTypes } from "./todo/action";
import { todosReducer } from "./todo/reducer";
import { ITodosState } from "./todo/types";
import { UsersActionTypes } from "./user/action";
import { userReducer } from "./user/reducer";
import { IUsersState } from "./user/type";

// devtool
import { composeWithDevTools } from 'redux-devtools-extension';

export interface IRootState {
  todosState: ITodosState;
  clientsState: IClientsState;
  projectsState: IProjectsState;
  authState: IAuthState;
  projectModesState: IProjectModesState;
  projectStatussState: IProjectStatussState;
  usersState: IUsersState;
  teamsState: ITeamsState;
  branchsState: IBranchsState;
  agencysState: IAgencysState;
}

export type IRootAction =
  | ClientsActionTypes
  | TodoActionTypes
  | ProjectsActionTypes
  | ProjectModesActionTypes
  | ProjectStatussActionTypes
  | AuthActionTypes
  | UsersActionTypes
  | TeamsActionTypes
  | BranchsActionTypes
  | AgencysActionTypes;

const reducers = combineReducers<IRootState>({
  todosState: todosReducer,
  clientsState: clientsReducer,
  projectsState: projectReducer,
  authState: authReducer,
  projectModesState: projectModeReducer,
  projectStatussState: projectStatusReducer,
  usersState: userReducer,
  teamsState: teamReducer,
  branchsState: branchReducer,
  agencysState: agencyReducer,
});

const store = createStore(reducers,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<IRootState, IRootAction>)
  )
);
export default store;
