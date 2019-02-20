import * as React from 'react';
import { ClientCard } from '../../molecules/ClientCard/ClientCard';
import { IProjectAndTaskByClientProps } from './IProjectAndTaskByClientProps';

export class ProjectAndTaskByClient extends React.Component<IProjectAndTaskByClientProps> {
  public render(): JSX.Element {

    const { clientList, projectList, taskList, onClientSelected } = this.props;

    return (
      <div >
        {clientList.map((client, i) => (<ClientCard key={i} client={client} projects={...projectList} tasks={...taskList} onClientSelected={onClientSelected} />))}
      </div>
    );
  }
}
