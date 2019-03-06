import * as React from 'react';
import { TaskBlock } from '../TasksBlock/TaskBlock';
import { IProjectBlockProps } from './IProjectBlockProps';
import { IProjectBlockState } from './IProjectBlockState';

export class ProjectBlock extends React.Component<IProjectBlockProps, IProjectBlockState> {
  constructor(props: IProjectBlockProps) {
    super(props);
    this.state = { showingTasks: false };

  }

  public render(): JSX.Element {

    const handleClick = () => {
      if (!this.state.showingTasks) {
        // this.props.onProjectSelected(this.props.project);
        this.setState({ showingTasks: true });
      } else {
        this.setState({ showingTasks: false });
      }
    };

    return (
      <div>
        <h3 onClick={handleClick}>{this.props.project.name}</h3>
        {this.state.showingTasks && <TaskBlock tasks={this.props.tasks} projectLoaderId={this.props.project.id} />}
      </div >
    );
  }
}
