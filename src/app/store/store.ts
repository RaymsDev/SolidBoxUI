import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { AuthActionTypes } from './auth/action';
import { authReducer } from './auth/reducer';
import { IAuthState } from './auth/type';
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

// devtool
import { composeWithDevTools } from 'redux-devtools-extension';
import taskReducer from './task/reducer';
import { ITasksState } from './task/type';

export interface IRootState {
  clientsState: IClientsState;
  projectsState: IProjectsState;
  authState: IAuthState;
  projectModesState: IProjectModesState;
  projectStatusListState: IProjectStatusListState;
  tasksState: ITasksState;
}

export type IRootAction =
  | ClientsActionTypes
  | ProjectsActionTypes
  | ProjectModesActionTypes
  | AuthActionTypes;

const reducers = combineReducers<IRootState>({
  clientsState: clientsReducer,
  projectsState: projectReducer,
  authState: authReducer,
  projectModesState: projectModeReducer,
  projectStatusListState: projectStatusReducer,
  tasksState: taskReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<IRootState, IRootAction>),
  ),
);
export default store;
