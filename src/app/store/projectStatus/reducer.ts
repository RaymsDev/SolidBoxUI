import { ProjectStatussActionTypes, ProjectStatusTypes } from "./action";
import { IProjectStatussState } from "./type";

const initialState: IProjectStatussState = {
  projectStatuss: [],
  isFetching: false,
  isError: false,
  errorMessage: '',
};

export const projectStatusReducer = (state: IProjectStatussState = initialState, action: ProjectStatussActionTypes): IProjectStatussState => {
  switch (action.type) {
    case ProjectStatusTypes.FETCH:
      return {
        ...state,
        isFetching: true,
        isError: false,
        errorMessage: ''
      };
    case ProjectStatusTypes.RECEIVE:
      return {
        ...state,
        projectStatuss: action.projectStatuss,
        isFetching: false,
        isError: false,
        errorMessage: ''
      };
    case ProjectStatusTypes.RECEIVE_ERROR:
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
