import * as React from 'react';
import { ProjectAndTaskByClient } from '../../organisms/projectAndTaskByClient/ProjectAndTaskByClient';
import { PageTemplate } from '../../templates/pageTemplate/PageTemplate';
import { IProjectPageProps } from './IProjectPageProps';
import { CLIENTS, PROJECTS, TASKS } from './mockup';

export class ProjectPage extends React.Component {
  public render(): JSX.Element {

    return (
      <PageTemplate>
        < ProjectAndTaskByClient clients={...CLIENTS} projects={...PROJECTS} tasks={...TASKS} />
      </PageTemplate>
    );
  }
}
