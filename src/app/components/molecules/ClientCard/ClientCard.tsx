import * as React from 'react';
import { Project } from '../../../models/Project';
import { ProjectBlock } from '../ProjectBlock/ProjectBlock';
import * as s from './ClientCard.scss';
import { IClientCardProps } from './IClientCardProps';

export class ClientCard extends React.Component<IClientCardProps> {
  public render(): JSX.Element {

    const { client, projects, tasks, onProjectSelected } = this.props;
    const dislpaidProject = [];

    const handleClick = () => {
      this.props.onClientSelected(this.props.client);
    };

    return (
      <div className={s.card}>
        <h2 onClick={handleClick}>{client.name}</h2>
        {/* {projects.map((project, i) => ((project.clientId === client.id) && <div key={i} >{project.name} ></div>))} */}
        {projects.map((project, i) => ((project.clientId === client.id) && < ProjectBlock project={project} tasks={tasks} onProjectSelected={onProjectSelected} />))}
      </div>
    );
  }
}
