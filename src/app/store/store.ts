import { applyMiddleware, combineReducers, createStore } from 'redux';
// devtool
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { AgencysActionTypes } from './agency/action';
import { agencyReducer } from './agency/reducer';
import { IAgencysState as IAgenciesState } from './agency/type';
import { AuthActionTypes } from './auth/action';
import { authReducer } from './auth/reducer';
import { IAuthState } from './auth/type';
import { BranchesActionTypes } from './branch/action';
import { branchReducer } from './branch/reducer';
import { IBranchesState } from './branch/type';
import { ClientsActionTypes } from './client/action';
import { clientsReducer } from './client/reducer';
import { IClientsState } from './client/types';
import { ProjectsActionTypes } from './project/action';
import { projectReducer } from './project/reducer';
import { IProjectsState } from './project/type';
import { ProjectModesActionTypes } from './projectMode/action';
import { projectModeReducer } from './projectMode/reducer';
import { IProjectModesState } from './projectMode/type';
import { ProjectStatussActionTypes } from './projectStatus/action';
import { projectStatusReducer } from './projectStatus/reducer';
import { IProjectStatusListState } from './projectStatus/type';
import taskReducer from './task/reducer';
import { ITasksState } from './task/type';
import { TeamsActionTypes } from './team/action';
import { teamReducer } from './team/reducer';
import { ITeamsState } from './team/type';
import { UsersActionTypes } from './user/action';
import { userReducer } from './user/reducer';
import { IUsersState } from './user/type';

export interface IRootState {
  clientsState: IClientsState;
  projectsState: IProjectsState;
  authState: IAuthState;
  projectModesState: IProjectModesState;
  projectStatusListState: IProjectStatusListState;
  tasksState: ITasksState;
  usersState: IUsersState;
  teamsState: ITeamsState;
  branchesState: IBranchesState;
  agenciesState: IAgenciesState;
}

export type IRootAction =
  | ClientsActionTypes
  | ProjectsActionTypes
  | ProjectModesActionTypes
  | ProjectStatussActionTypes
  | AuthActionTypes
  | UsersActionTypes
  | TeamsActionTypes
  | BranchesActionTypes
  | AgencysActionTypes;

const reducers = combineReducers<IRootState>({
  clientsState: clientsReducer,
  projectsState: projectReducer,
  authState: authReducer,
  projectModesState: projectModeReducer,
  projectStatusListState: projectStatusReducer,
  tasksState: taskReducer,
  usersState: userReducer,
  teamsState: teamReducer,
  branchesState: branchReducer,
  agenciesState: agencyReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<IRootState, IRootAction>),
  ),
);
export default store;
