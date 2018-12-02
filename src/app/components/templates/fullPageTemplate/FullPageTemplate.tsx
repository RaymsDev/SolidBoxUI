import * as React from 'react';
import * as s from './FullPageTemplate.scss';
export class FullPageTemplate extends React.Component {
  public render(): JSX.Element {
    return (
      <div className={s.container}>
        {this.props.children}
      </div>
    );
  }
}
