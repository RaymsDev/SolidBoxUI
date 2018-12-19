import * as React from 'react';
import { ISelectBoxProps } from './ISelectBoxProps';
import { ISelectBoxState } from './ISelectBoxState';
export class SelectBox extends React.Component<ISelectBoxProps, ISelectBoxState> {
  constructor(props: ISelectBoxProps) {
    super(props);

    const { list } = props;
    this.state = {
      selected: list.length > 0 ? list[0].id : null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  public render(): JSX.Element {
    const { list, name, label } = this.props;
    const { selected } = this.state;
    return (
      <>
        <label htmlFor={name}>{label}</label>
        <select name={name} onChange={this.handleChange}>
          {list.map((item) => (<option key={item.id} value={item.id} defaultValue={selected.toString()}>{item.value}</option>))}
        </select>
      </>
    );
  }

  private handleChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    e.preventDefault();
    const id = Number(e.target.value);
    this.setState({
      selected: id
    });

    this.props.onChangeHandler(id);
  }
}
