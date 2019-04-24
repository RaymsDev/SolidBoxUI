import { normalize, schema } from 'normalizr';
import { IListNormalized } from '../../models/IListNormalized';
import { ITeam } from '../../models/Team';
import { TeamsActionTypes, TeamTypes } from './action';
import { ITeamsState } from './type';

const initialState: ITeamsState = {
  teams: {
    idList: [],
    entities: {},
  },
  isFetching: false,
  isError: false,
  errorMessage: '',
};

const normalizeTeams = (teams: ITeam[]): IListNormalized<ITeam> => {
  const team = new schema.Entity('teams');
  const mySchema = { teams: [team] };
  const normalizedData = normalize(
    {
      teams,
    },
    mySchema,
  );
  return {
    idList: normalizedData.result.teams,
    entities: normalizedData.entities.teams,
  };
};

const receiveTeams = (
  state: ITeamsState = initialState,
  action: TeamsActionTypes,
): ITeamsState => {
  switch (action.type) {
    case TeamTypes.RECEIVE:
      const { entities, idList } = normalizeTeams(action.teams);
      return {
        ...state,
        teams: {
          idList,
          entities,
        },
        isFetching: false,
        isError: false,
        errorMessage: '',
      };
    default:
      return state;
  }
};

export const teamReducer = (
  state: ITeamsState = initialState,
  action: TeamsActionTypes,
): ITeamsState => {
  switch (action.type) {
    case TeamTypes.FETCH:
    case TeamTypes.FETCH_TEAM_BY_LINK:
      return {
        ...state,
        isFetching: true,
        isError: false,
        errorMessage: '',
      };
    case TeamTypes.RECEIVE:
      return receiveTeams(state, action);
    case TeamTypes.RECEIVE_ERROR:
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
