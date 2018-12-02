import * as React from 'react';
export class PageTemplate extends React.Component {
  public render(): JSX.Element {
    const children = this.props.children;
    return (
      <>
        <head>header</head>
        <div className="container">
          {children}
        </div>
        <footer>footer</footer>
      </>
    );
  }
}
