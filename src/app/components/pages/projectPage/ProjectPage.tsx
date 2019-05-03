import * as React from 'react';
import { withAITracking } from 'react-appinsights';
import PageTemplateContainer from '../../../containers/PageTemplateContainer';
import { ProjectAndTaskByClient } from '../../organisms/projectAndTaskByClient/ProjectAndTaskByClient';
import { CLIENTS, PROJECTS, TASKS } from './mockup';
class ProjectPage extends React.Component {
  public render(): JSX.Element {
    return (
      <PageTemplateContainer>
        <ProjectAndTaskByClient
          clients={...CLIENTS}
          projects={...PROJECTS}
          tasks={...TASKS}
        />
      </PageTemplateContainer>
    );
  }
}

export default withAITracking(ProjectPage);
