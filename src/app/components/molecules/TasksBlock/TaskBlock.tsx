import * as React from 'react';
import { Task } from '../../../models/Task';
import { ITaskBlockProps } from './ITaskBlockProps';
export class TaskBlock extends React.Component<ITaskBlockProps> {
  public render(): JSX.Element {

    const { tasks, projectLoaderId } = this.props;

    return (
      <div>
        {tasks.map((task, i) => (task.projectId === projectLoaderId) && <p key={i}>{task.name}, done: {task.realizedPercentage}% </p>)}
      </div>
    );
  }
}
