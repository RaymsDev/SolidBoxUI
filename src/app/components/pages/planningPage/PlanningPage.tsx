import * as React from 'react';
import { PageTemplate } from '../../templates/pageTemplate/PageTemplate';
import { IPlanningPageProps } from './IPlanningPageProps';
export class PlanningPage extends React.Component<IPlanningPageProps> {
  constructor(props: IPlanningPageProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <PageTemplate>
        <div>PLanning</div>
      </PageTemplate>
    );
  }
}
