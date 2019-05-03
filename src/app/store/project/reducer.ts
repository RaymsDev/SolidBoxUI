import { Project } from '../../models/Project';
import { ProjectsActionTypes, ProjectTypes } from './action';
import { IProjectsState } from './type';

const initialState: IProjectsState = {
  projects: [],
  isFetching: false,
  isError: false,
  errorMessage: '',
};

export const projectReducer = (
  state: IProjectsState = initialState,
  action: ProjectsActionTypes,
): IProjectsState => {
  switch (action.type) {
    case ProjectTypes.FETCH_PROJECTS:
    case ProjectTypes.FETCH_CLIENT_PROJECTS:
      return {
        ...state,
        isFetching: true,
        isError: false,
        errorMessage: '',
      };
    case ProjectTypes.RECEIVE_PROJECTS:
      const p = [];
      for (let i = 0; i < action.projects.length; i++) {
        p.push(new Project(action.projects[i]));
      }
      return {
        ...state,
        projects: p,
        isFetching: false,
        isError: false,
        errorMessage: '',
      };
    case ProjectTypes.RECEIVE_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
