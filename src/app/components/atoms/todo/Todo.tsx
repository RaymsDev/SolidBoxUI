import * as React from 'react';
import { ITodoProps } from './ITodoProps';
import * as s from './Todo.scss';
export class Todo extends React.Component<ITodoProps> {

  constructor(props: ITodoProps) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  public render(): JSX.Element {
    const { todo } = this.props;
    return (
      <li className={`${s.container} ${todo.isFinished ? s.finished : ''}`} onClick={this.handleClick}>{todo.text}</li>
    );
  }

  private handleClick(): void {
    const { todo, onClickHandle } = this.props;
    onClickHandle(todo.id);
  }
}
