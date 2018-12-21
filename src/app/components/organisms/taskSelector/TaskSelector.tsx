import * as React from 'react';
import { IClient } from '../../../models/Client';
import { IDictionaryItem } from '../../../models/DictionaryItem';
import { SelectBox } from '../../atoms/selectBox/SelectBox';
import { ITaskSelectorProps } from './ITaskSelectorProps';
import { ITaskSelectorState } from './ITaskSelectorState';
import * as s from './TaskSelector.scss';

export class TaskSelector extends React.Component<ITaskSelectorProps, ITaskSelectorState> {
  constructor(props: ITaskSelectorProps) {
    super(props);

    const { clientList } = this.props;

    this.state = {
      clientDictionary: this.clientsToDictionary(clientList)
    };
  }

  public render(): JSX.Element {
    const { clientDictionary } = this.state;
    const { onClientSelected } = this.props;
    return (
      <div className={s.container}>
        <SelectBox list={clientDictionary} label="Clients :" name="client" onChangeHandler={onClientSelected} />
      </div>
    );
  }

  public componentWillReceiveProps(nextProps: ITaskSelectorProps) {
    if (nextProps.clientList !== this.props.clientList) {
      this.setState({ clientDictionary: this.clientsToDictionary(nextProps.clientList) });
    }
  }

  private clientsToDictionary(clients: IClient[]): Array<IDictionaryItem<number>> {
    return clients.map((c) => {
      return ({
        id: c.id,
        value: c.name
      });
    });
  }
}
