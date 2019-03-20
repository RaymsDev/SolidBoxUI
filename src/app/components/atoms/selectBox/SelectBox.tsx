import * as React from 'react';
import { IDictionaryItem } from '../../../models/DictionaryItem';
import { ISelectBoxProps } from './ISelectBoxProps';
import { ISelectBoxState } from './ISelectBoxState';
export class SelectBox extends React.Component<ISelectBoxProps, ISelectBoxState> {
  constructor(props: ISelectBoxProps) {
    super(props);

    const { list } = props;
    this.state = {
      selected: list.length > 0 ? list[0].id : undefined
    };

    this.handleChange = this.handleChange.bind(this);
  }

  public render(): JSX.Element {
    const { list, name, label, isFetching } = this.props;
    const { selected } = this.state;

    return (
      <>
        <label htmlFor={name}>{label}</label>
        <select name={name} onChange={this.handleChange} value={selected}>
          {list.map((item) => (<option key={item.id} value={item.id} >{item.value}</option>))}
        </select>
      </>
    );
  }

  public componentDidMount() {
    const { isFetching } = this.props;
    const { selected } = this.state;
    if (!isFetching && selected) {
      this.selectItem(selected);
    }
  }

  public componentDidUpdate(prevProps: ISelectBoxProps) {
    if (this.state.selected === undefined && prevProps.isFetching && this.props.list.length > 0) {
      return this.selectItem(this.props.list[0].id);
    }

    if (prevProps.isFetching) {
      return this.selectItem(undefined);
    }
  }

  private selectItem(id: number) {
    this.setState({
      selected: id
    });

    const { onChangeHandler, list } = this.props;

    const selectedItem = this.getSelectedObject(list, id);

    if (selectedItem) {
      onChangeHandler(selectedItem.object);
    }
  }

  private handleChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    e.preventDefault();
    const id = Number(e.target.value);
    this.selectItem(id);
  }

  private getSelectedObject(list: Array<IDictionaryItem<number>>, id: number): IDictionaryItem<number> {
    return list.find((i) => {
      return i.id === id;
    });
  }
}
