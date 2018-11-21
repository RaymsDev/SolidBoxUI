import * as React from 'react';
export class PageTemplate extends React.Component {
  public render(): JSX.Element {
    const children = this.props.children;
    return (
      <>
        Content:
        {children}
      </>
    );
  }
}
