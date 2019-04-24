import * as React from 'react';
import { DropdownItemProps } from 'semantic-ui-react';
import Dropdown from 'semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown';
import { IDictionaryItem } from '../../../models/DictionaryItem';
import { IMultipleSelectorProps } from './IMultipleSelectorProps';
import { IMultipleSelectorState } from './IMultipleSelectorState';
export class MultipleSelector extends React.Component<
  IMultipleSelectorProps,
  IMultipleSelectorState
> {
  constructor(props: IMultipleSelectorProps) {
    super(props);

    const { list } = this.props;

    this.state = {
      selected: list.length > 0 ? list.map(i => i.key) : undefined,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  public componentDidMount() {
    const { isFetching } = this.props;
    const { selected } = this.state;
    if (!isFetching && selected) {
      this.selectItems(selected);
    }
  }

  public render(): JSX.Element {
    const { name, label, list, isFetching, placeholder } = this.props;
    const { selected } = this.state;
    return (
      <>
        <label htmlFor={name}>{label}</label>
        <Dropdown
          placeholder={placeholder}
          multiple={true}
          search={true}
          selection={true}
          options={this.dictionnaryToOptions(list)}
          loading={isFetching}
          onChange={this.handleChange}
          defaultValue={selected}
        />
      </>
    );
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

  private handleChange(event: React.SyntheticEvent, data: any): void {
    if (data) {
      const { value: idList } = data;
      this.selectItems(idList);
    }
  }

  private selectItems(idList: number[]) {
    this.setState({
      selected: idList,
    });

    const { onChangeHandler, list } = this.props;

    const selectedItems = this.getSelectedObject(list, idList);

    if (selectedItems) {
      onChangeHandler(selectedItems);
    }
  }

  private getSelectedObject(
    list: Array<IDictionaryItem<number>>,
    idList: number[],
  ): any[] {
    return list.filter(i => idList.some(id => id === i.key)).map(i => i.value);
  }
}
