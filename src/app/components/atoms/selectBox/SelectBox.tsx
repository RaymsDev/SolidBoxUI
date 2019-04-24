import * as React from 'react';
import Dropdown from 'semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown';
import { DropdownItemProps } from 'semantic-ui-react/dist/commonjs/modules/Dropdown/DropdownItem';
import { IDictionaryItem } from '../../../models/DictionaryItem';
import { ISelectBoxProps } from './ISelectBoxProps';
import { ISelectBoxState } from './ISelectBoxState';
export class SelectBox extends React.Component<
  ISelectBoxProps,
  ISelectBoxState
> {
  constructor(props: ISelectBoxProps) {
    super(props);

    const { list } = props;
    this.state = {
      selected: list.length > 0 ? list[0].key : undefined,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  public render(): JSX.Element {
    const { list, name, label, isFetching } = this.props;
    const { selected } = this.state;
    const options = this.dictionnaryToOptions(list);
    return (
      <>
        <label htmlFor={name}>{label}</label>
        <Dropdown
          clearable={true}
          options={options}
          defaultValue={selected}
          selection={true}
          loading={isFetching}
          onChange={this.handleChange}
        />
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
    /*if (
      this.state.selected === undefined &&
      prevProps.isFetching &&
      this.props.list.length > 0
    ) {
      return this.selectItem(this.props.list[0].key);
    }

    if (prevProps.isFetching) {
      return this.selectItem(undefined);
    }*/
  }
  private dictionnaryToOptions(
    list: Array<IDictionaryItem<number, string, any>>,
  ): DropdownItemProps[] {
    return list.map(i => ({
      key: i.key,
      text: i.text,
      value: i.key,
    }));
  }

  private selectItem(value: number) {
    this.setState({
      selected: value,
    });

    const { onChangeHandler, list } = this.props;

    const selectedItem = this.getSelectedObject(list, value);

    if (selectedItem) {
      onChangeHandler(selectedItem.value);
    }
  }

  private handleChange(event: React.SyntheticEvent, data: any): void {
    if (data) {
      const id = Number(data.value);
      this.selectItem(id);
    }
  }

  private getSelectedObject(
    list: Array<IDictionaryItem<number>>,
    id: number,
  ): IDictionaryItem<number> {
    return list.find(i => {
      return i.key === id;
    });
  }
}
