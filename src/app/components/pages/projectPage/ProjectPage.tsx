import * as React from 'react';
import PageTemplateContainer from '../../../containers/PageTemplateContainer';
import { ProjectAndTaskByClient } from '../../organisms/projectAndTaskByClient/ProjectAndTaskByClient';
import { PageTemplate } from '../../templates/pageTemplate/PageTemplate';
import { IProjectPageProps } from './IProjectPageProps';
import { CLIENTS, PROJECTS, TASKS } from './mockup';

export class ProjectPage extends React.Component {
  public render(): JSX.Element {

    return (
      <PageTemplateContainer>
        < ProjectAndTaskByClient clients={...CLIENTS} projects={...PROJECTS} tasks={...TASKS} />
      </PageTemplateContainer>
    );
  }
}
