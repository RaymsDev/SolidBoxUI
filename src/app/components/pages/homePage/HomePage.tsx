import * as React from 'react';
import PageTemplateContainer from '../../../containers/PageTemplateContainer';
import { PageTemplate } from '../../templates/pageTemplate/PageTemplate';
export class HomePage extends React.Component {
  public render(): JSX.Element {
    const children = <div>Home</div>;
    return (
      <PageTemplateContainer>
        {children}
      </PageTemplateContainer>
    );
  }
}
