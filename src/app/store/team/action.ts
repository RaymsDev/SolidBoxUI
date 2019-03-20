import { Action, Dispatch, Store } from "redux";
import { ThunkAction } from "redux-thunk";
import { Team } from "../../models/Team";
import { ITeamService } from "../../services/team/ITeam.service";
import { ITeamsState } from "./type";

export enum TeamTypes {
  FETCH = 'FETCH_TEAM',
  RECEIVE = 'RECEIVE_TEAM',
  RECEIVE_ERROR = 'RECEIVE_ERROR_TEAM',
}

export interface IFetchAction extends Action {
  type: TeamTypes.FETCH;
}

export interface IReceiveAction extends Action {
  type: TeamTypes.RECEIVE;
  teams: Team[];
}

export interface IReceiveErrorAction extends Action {
  type: TeamTypes.RECEIVE_ERROR;
  errorMessage: string;
}

export type TeamThunkResult<R> = ThunkAction<R, ITeamsState, undefined, Action>;

export type TeamsActionTypes =
  | IFetchAction
  | IReceiveAction
  | IReceiveErrorAction;

export default class TeamActions {
  private store: Store;
  private teamService: ITeamService;
  constructor(store: Store, teamService: ITeamService) {
    this.store = store;
    this.teamService = teamService;
  }

  public fetch(): IFetchAction {
    this.store.dispatch<any>(this.fetchAsync());
    return {
      type: TeamTypes.FETCH
    };
  }

  public receive(teams: Team[]): IReceiveAction {
    return {
      type: TeamTypes.RECEIVE,
      teams
    };
  }

  public receiveError(errorMessage: string): IReceiveErrorAction {
    return {
      type: TeamTypes.RECEIVE_ERROR,
      errorMessage
    };
  }

  public fetchAsync() {
    return (dispatch: Dispatch<Action>) => {
      return this.teamService.list()
        .then((teams) => {
          dispatch(this.receive(teams));
        })
        .catch((error) => {
          dispatch(this.receiveError(error));
        });
    };
  }
}
