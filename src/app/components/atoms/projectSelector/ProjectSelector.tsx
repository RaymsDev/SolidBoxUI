import * as React from 'react';
import { IProject } from '../../../models/Project';
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

    this.onProjectClick = this.onProjectClick.bind(this);
  }

  public render(): JSX.Element {
    const { projectList } = this.props;
    return (
      <ul className={styles.container}>
        {projectList.map(p => (
          <li
            className={styles.item}
            key={p.id}
            onClick={this.onProjectClick.bind(this, p)}
          >
            {p.name}
          </li>
        ))}
      </ul>
    );
  }

  private readonly onProjectClick = (project: IProject) => {
    const { onProjectSelected } = this.props;

    onProjectSelected(project);
  };

  private createSubAccordeon() {}
}
