import * as React from 'react';
import * as s from './ClientCard.scss';
import { IClientCardProps } from './IClientCardProps';

export class ClientCard extends React.Component<IClientCardProps> {
  public render(): JSX.Element {

    const { client, projects, tasks } = this.props;

    return (
      <div className={s.card}>
        <h2>{client.name}</h2>
        {projects.map((project, i) => ((project.clientId === client.id) && <div key={i}>{project.name}</div>))}
      </div>
    );
  }
}
