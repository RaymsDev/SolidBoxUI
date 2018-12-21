import * as React from 'react';
import { IClient } from '../../../models/Client';
import { TaskSelector } from '../../organisms/taskSelector/TaskSelector';
import { PageTemplate } from '../../templates/pageTemplate/PageTemplate';
import { IPlanningPageProps } from './IPlanningPageProps';
export class PlanningPage extends React.Component<IPlanningPageProps> {
  constructor(props: IPlanningPageProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { clientList, onClientSelected } = this.props;
    return (
      <PageTemplate>
        <TaskSelector clientList={clientList} onClientSelected={onClientSelected} />
      </PageTemplate>
    );
  }
}
