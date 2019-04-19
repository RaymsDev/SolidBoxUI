import { TeamsActionTypes, TeamTypes } from "./action";
import { ITeamsState } from "./type";

const initialState: ITeamsState = {
  teams: [],
  isFetching: false,
  isError: false,
  errorMessage: '',
};

export const teamReducer = (state: ITeamsState = initialState, action: TeamsActionTypes): ITeamsState => {
  switch (action.type) {
    case TeamTypes.FETCH:
      return {
        ...state,
        isFetching: true,
        isError: false,
        errorMessage: ''
      };
    case TeamTypes.RECEIVE:
      return {
        ...state,
        teams: action.teams,
        isFetching: false,
        isError: false,
        errorMessage: ''
      };
    case TeamTypes.RECEIVE_ERROR:
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
