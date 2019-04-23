import * as React from 'react';
import { IClient } from '../../../models/Client';
import { IDictionaryItem } from '../../../models/DictionaryItem';
import { SelectBox } from '../../atoms/selectBox/SelectBox';
import { IPRojectSelectorProps } from './IProjectSelectorProps';
import * as s from './ProjectSelector.scss';

export class ProjectSelector extends React.Component<IPRojectSelectorProps> {
  constructor(props: IPRojectSelectorProps) {
    super(props);
  }

  public render(): JSX.Element {
    const {
      onClientSelected,
      clientList,
      clientsIsFetching: clientIsFetching,
    } = this.props;
    return (
      <div className={s.container}>
        <div>
          <SelectBox
            list={this.clientsToDictionary(clientList)}
            isFetching={clientIsFetching}
            label="Clients :"
            name="client"
            onChangeHandler={onClientSelected}
          />
        </div>
      </div>
    );
  }

  private clientsToDictionary(
    clients: IClient[],
  ): Array<IDictionaryItem<number>> {
    return clients.map(c => {
      return {
        key: c.id,
        text: c.name,
        value: c,
      };
    });
  }
}
