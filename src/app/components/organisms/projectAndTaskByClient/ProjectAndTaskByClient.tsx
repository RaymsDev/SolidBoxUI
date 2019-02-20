import * as React from 'react';
import { ClientCard } from '../../molecules/ClientCard/ClientCard';
import { IProjectAndTaskByClientProps } from './IProjectAndTaskByClientProps';

export class ProjectAndTaskByClient extends React.Component<IProjectAndTaskByClientProps> {
  public render(): JSX.Element {

    const { clients, projects, tasks, onClientSelected } = this.props;

    return (
      <div >
        {clients.map((client, i) => (<ClientCard key={i} client={client} projects={...projects} tasks={...tasks} onClientSelected={onClientSelected} />))}
      </div>
    );
  }
}
