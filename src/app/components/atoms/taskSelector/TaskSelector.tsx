import * as React from 'react';
import { IProject } from '../../../models/Project';
import { ITask } from '../../../models/Task';
import { ITaskSelectorProps } from './ITaskSelectorProps';
import * as styles from './TaskSelector.scss';

export class TaskSelector extends React.Component<ITaskSelectorProps> {
  constructor(props: ITaskSelectorProps) {
    super(props);

    this.state = {};
  }

  public render(): JSX.Element {
    const { projectList, taskList } = this.props;
    return (
      <ul className={styles.container}>
        {projectList.map(p => (
          <li
            className={styles.item}
            key={p.id}
            onClick={this.onProjectClick.bind(this, p)}
          >
            <ul>
              {p.name}
              {p.taskIdList
                .filter(id => taskList.entities.hasOwnProperty(id))
                .map(id => this.createNestedTask(id))}
            </ul>
          </li>
        ))}
      </ul>
    );
  }

  private createNestedTask(taskId: number): JSX.Element {
    const { taskList } = this.props;
    const task = taskList.entities[taskId];
    return (
      <li
        className={`${styles.item} ${styles.subItem}`}
        key={task.id}
        onClick={this.onTaskClick.bind(this, task)}
      >
        {task.name}
      </li>
    );
  }

  private readonly onTaskClick = (task: ITask) => {
    const { onTaskSelected } = this.props;
    onTaskSelected(task);
  };

  private readonly onProjectClick = (project: IProject) => {
    const { onProjectSelected } = this.props;

    onProjectSelected(project);
  };
}
