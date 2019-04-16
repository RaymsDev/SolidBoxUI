import { ProjectStatussActionTypes, ProjectStatusTypes } from './action';
import { IProjectStatusListState } from './type';

const initialState: IProjectStatusListState = {
  projectStatusList: [],
  isFetching: false,
  isError: false,
  errorMessage: ''
};

export const projectStatusReducer = (
  state: IProjectStatusListState = initialState,
  action: ProjectStatussActionTypes
): IProjectStatusListState => {
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
        projectStatusList: action.projectStatusList,
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
