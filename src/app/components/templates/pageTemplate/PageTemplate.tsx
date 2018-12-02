import * as React from 'react';
import * as styles from './PageTemplate.scss';
export class PageTemplate extends React.Component {
  public render(): JSX.Element {
    const children = this.props.children;
    return (
      <>
        <header className={styles.head}>header</header>
        <div className={styles.container}>
          {children}
        </div>
        <footer>footer</footer>
      </>
    );
  }
}
