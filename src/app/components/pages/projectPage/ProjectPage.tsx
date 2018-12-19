import * as React from 'react';
import { ProjectAndTaskByClient } from '../../organisms/projectAndTaskByClient/ProjectAndTaskByClient';
import { PageTemplate } from '../../templates/pageTemplate/PageTemplate';
import { IProjectPageProps } from './IProjectPageProps';

export class ProjectPage extends React.Component<IProjectPageProps> {
  public render(): JSX.Element {
    return (
      <PageTemplate>
        < ProjectAndTaskByClient {...this.props} />
      </PageTemplate>
    );
  }
}
