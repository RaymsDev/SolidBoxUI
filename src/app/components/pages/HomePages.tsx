import * as React from 'react';
import { PageTemplate } from '../templates/PageTemplate';
export class HomePage extends React.Component {
  public render(): JSX.Element {
    const children = <div>plop</div>;
    return (
      <PageTemplate>
        {children}
      </PageTemplate>
    );
  }
}
