import * as React from 'react';

import PageTemplateContainer from '../../../containers/PageTemplateContainer';
import { TaskSelector } from '../../organisms/taskSelector/TaskSelector';
import { IPlanningPageProps } from './IPlanningPageProps';
export class PlanningPage extends React.Component<IPlanningPageProps> {
  constructor(props: IPlanningPageProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <PageTemplateContainer>
        <TaskSelector {...this.props} />
      </PageTemplateContainer>
    );
  }
}
