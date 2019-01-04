import * as React from 'react';
import { IClient } from '../../../models/Client';
import { IDictionaryItem } from '../../../models/DictionaryItem';
import { Project } from '../../../models/Project';
import { SelectBox } from '../../atoms/selectBox/SelectBox';
import { ITaskSelectorProps } from './ITaskSelectorProps';
import * as s from './TaskSelector.scss';

export class TaskSelector extends React.Component<ITaskSelectorProps> {
  constructor(props: ITaskSelectorProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { onClientSelected, onProjectSelected, clientList, projectList, clientsIsFetching: clientIsFetching, projectsIsFetching: projectIsFetching } = this.props;
    return (
      <div className={s.container}>
        <div>
          <SelectBox list={this.clientsToDictionary(clientList)} isFetching={clientIsFetching} label="Clients :" name="client" onChangeHandler={onClientSelected} />
        </div>
        <div>
          <SelectBox list={this.projectsToDictionary(projectList)} isFetching={projectIsFetching} label="Projets :" name="project" onChangeHandler={onProjectSelected} />
        </div>
      </div>
    );
  }

  private clientsToDictionary(clients: IClient[]): Array<IDictionaryItem<number>> {
    return clients.map((c) => {
      return ({
        id: c.id,
        value: c.name,
        object: c
      });
    });
  }

  private projectsToDictionary(projects: Project[]): Array<IDictionaryItem<number>> {
    return projects.map((p) => {
      return ({
        id: p.id,
        value: p.name,
        object: p
      });
    });
  }
}
