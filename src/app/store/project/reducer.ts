import { IProjectsState, ProjectsActionTypes, ProjectTypes } from "./type";

export const ProjectReducer = (state: IProjectsState, action: ProjectsActionTypes): IProjectsState => {
  switch (action.type) {
    case ProjectTypes.FETCH_PROJECTS:
      return {
        ...state,
        isFetching: true,
        isError: false,
        errorMessage: ''
      };
    case ProjectTypes.RECEIVE_PROJECTS:
      return {
        ...state,
        projects: action.projects,
        isFetching: false,
        isError: false,
        errorMessage: ''
      };
    case ProjectTypes.RECEIVE_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true,
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
};
