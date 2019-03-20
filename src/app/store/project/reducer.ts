import { Project } from "../../models/Project";
import { ProjectsActionTypes, ProjectTypes } from "./action";
import { IProjectsState } from "./type";

const initialState: IProjectsState = {
  projects: [],
  isFetching: false,
  isError: false,
  errorMessage: '',
  edited: new Project(),
};

export const projectReducer = (state: IProjectsState = initialState, action: ProjectsActionTypes): IProjectsState => {
  switch (action.type) {
    case ProjectTypes.FETCH_PROJECTS:
    case ProjectTypes.FETCH_CLIENT_PROJECTS:
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
    case ProjectTypes.NEW_EDITED:
      return {
        ...state,
        edited: action.project,
      };
    case ProjectTypes.UPDATE_EDITED:
      const clonedEdited = state.edited.clone();
      clonedEdited[action.attribut] = action.value;
      return {
        ...state,
        edited: clonedEdited
      };
    default:
      return state;
  }
};
