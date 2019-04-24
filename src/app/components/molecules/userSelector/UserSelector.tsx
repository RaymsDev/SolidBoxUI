import * as React from 'react';
import { IAgency } from '../../../models/Agency';
import { IBranch } from '../../../models/Branch';
import { IDictionaryItem } from '../../../models/DictionaryItem';
import { IListNormalized } from '../../../models/IListNormalized';
import { ITeam } from '../../../models/Team';
import { IUser } from '../../../models/User';
import { MultipleSelector } from '../../atoms/multipleSelector/MultipleSelector';
import { SelectBox } from '../../atoms/selectBox/SelectBox';
import { IUserSelectorProps } from './IUserSelectorProps';
import { IUserSelectorState } from './IUserSelectorState';
export class UserSelector extends React.Component<
  IUserSelectorProps,
  IUserSelectorState
> {
  constructor(props: IUserSelectorProps) {
    super(props);

    this.state = {};
  }

  public render(): JSX.Element {
    const { agencyList, onAgencySelected, agencyIsFetching } = this.props;
    const { branchList, onBranchSelected, branchIsFetching } = this.props;
    const { teamList, onTeamSelected, teamIsFetching } = this.props;
    const { userList, onUsersSelected, userIsFetching } = this.props;
    return (
      <div>
        <SelectBox
          list={this.agenciesToDictionary(agencyList)}
          isFetching={agencyIsFetching}
          label="Agencies :"
          name="agency"
          onChangeHandler={onAgencySelected}
        />
        <SelectBox
          list={this.branchesToDictionary(branchList)}
          isFetching={branchIsFetching}
          label="Branches :"
          name="branch"
          onChangeHandler={onBranchSelected}
        />
        <SelectBox
          list={this.teamsToDictionary(teamList)}
          isFetching={teamIsFetching}
          label="Teams :"
          name="team"
          onChangeHandler={onTeamSelected}
        />
        <MultipleSelector
          list={this.usersToDictionary(userList)}
          isFetching={userIsFetching}
          label="Users :"
          name="user"
          placeholder=""
          onChangeHandler={onUsersSelected}
        />
      </div>
    );
  }

  private agenciesToDictionary(
    agencies: IListNormalized<IAgency>,
  ): Array<IDictionaryItem<number>> {
    return agencies.idList.map(id => {
      const agency = agencies.entities[id];
      return {
        key: agency.id,
        text: agency.name,
        value: agency,
      };
    });
  }

  private branchesToDictionary(
    branches: IListNormalized<IBranch>,
  ): Array<IDictionaryItem<number>> {
    return branches.idList.map(id => {
      const branch = branches.entities[id];
      return {
        key: branch.id,
        text: branch.name,
        value: branch,
      };
    });
  }

  private teamsToDictionary(
    teams: IListNormalized<ITeam>,
  ): Array<IDictionaryItem<number>> {
    return teams.idList.map(id => {
      const team = teams.entities[id];
      return {
        key: team.id,
        text: team.name,
        value: team,
      };
    });
  }

  private usersToDictionary(
    users: IListNormalized<IUser>,
  ): Array<IDictionaryItem<number>> {
    return users.idList.map(id => {
      const user = users.entities[id];
      return {
        key: user.id,
        text: `${user.firstName} ${user.lastName}`,
        value: user,
      };
    });
  }
}
