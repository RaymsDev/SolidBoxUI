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
  const p = [];
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
      for (const project of action.projects) {
        p.push(new Project(project));
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
    case ProjectTypes.ADD:
      for (const project of action.projects) {
        p.push(new Project(project));
      }
      for (const project of state.projects) {
        p.push(new Project(project));
      }
      return {
        ...state,
        projects: p,
        isFetching: false,
        isError: false,
        errorMessage: '',
      };
    case ProjectTypes.EDIT:
      for (const project of state.projects) {
        const edited = action.projects.find(ap => ap.id === project.id);
        if (!edited) {
          p.push(new Project(project));
        } else {
          p.push(new Project(edited));
        }
      }
      return {
        ...state,
        projects: p,
        isFetching: false,
        isError: false,
        errorMessage: '',
      };
    default:
      return state;
  }
};
