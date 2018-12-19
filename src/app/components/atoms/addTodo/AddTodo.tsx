import * as React from 'react';
import { IAddTodoProps } from './IAddTodoProps';
import { IAddTodoState } from './IAddTodoState';
export class AddTodo extends React.Component<IAddTodoProps, IAddTodoState> {

  constructor(props: IAddTodoProps) {
    super(props);

    this.state = {
      input: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.onAddButtonClick = this.onAddButtonClick.bind(this);
  }

  public render(): JSX.Element {
    const { input } = this.state;
    return (
      <div>
        <input onChange={this.handleChange} type="text" value={input} name="todo" placeholder="Enter Todo" />
        <button onClick={this.onAddButtonClick}>Add</button>
      </div>
    );
  }

  private handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      input: e.target.value
    });
  }

  private onAddButtonClick(e: React.MouseEvent): void {
    e.preventDefault();
    const { onSubmitHandler } = this.props;
    const { input } = this.state;
    onSubmitHandler(input);
    this.setState({
      input: ''
    });
  }
}
