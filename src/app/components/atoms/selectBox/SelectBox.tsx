import * as React from 'react';
import { ISelectBoxProps } from './ISelectBoxProps';
import { ISelectBoxState } from './ISelectBoxState';
export class SelectBox extends React.Component<ISelectBoxProps, ISelectBoxState> {
  constructor(props: ISelectBoxProps) {
    super(props);

    this.state = {
      selected: props.selected
    };

    this.handleChange = this.handleChange.bind(this);
  }

  public render(): JSX.Element {
    const { list, name, label } = this.props;
    const { selected } = this.state;
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <select name={name} onChange={this.handleChange}>
          {list.map((item) => (<option key={item.id} value={item.id} selected={selected === item.id}>{item.value}</option>))}
        </select>
      </div>
    );
  }

  private handleChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    e.preventDefault();
    const id: number = Number(e.target.value);
    this.setState({
      selected: id
    });

    this.props.onChangeHandler(id);
  }
}
