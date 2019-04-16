import * as React from 'react';
import { IProject } from '../../../models/Project';
import { ITask } from '../../../models/Task';
import { IProjectSelectorProps } from './IProjectSelectorProps';
import { IProjectSelectorState } from './IProjectSelectorState';
import * as styles from './ProjectSelector.scss';

export class ProjectSelector extends React.Component<
  IProjectSelectorProps,
  IProjectSelectorState
> {
  constructor(props: IProjectSelectorProps) {
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
                .filter(id => taskList.hasOwnProperty(id))
                .map(id => this.createNestedTask(id))}
            </ul>
          </li>
        ))}
      </ul>
    );
  }

  private createNestedTask(taskId: string): JSX.Element {
    const { taskList } = this.props;
    const task = taskList[taskId];
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
