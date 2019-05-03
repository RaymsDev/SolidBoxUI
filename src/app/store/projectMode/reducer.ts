import { ProjectModesActionTypes, ProjectModeTypes } from "./action";
import { IProjectModesState } from "./type";

const initialState: IProjectModesState = {
  projectModes: [],
  isFetching: false,
  isError: false,
  errorMessage: '',
};

export const projectModeReducer = (state: IProjectModesState = initialState, action: ProjectModesActionTypes): IProjectModesState => {
  switch (action.type) {
    case ProjectModeTypes.FETCH:
      return {
        ...state,
        isFetching: true,
        isError: false,
        errorMessage: ''
      };
    case ProjectModeTypes.RECEIVE:
      return {
        ...state,
        projectModes: action.projectModes,
        isFetching: false,
        isError: false,
        errorMessage: ''
      };
    case ProjectModeTypes.RECEIVE_ERROR:
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
