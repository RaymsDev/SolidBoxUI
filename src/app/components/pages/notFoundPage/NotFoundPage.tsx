import * as React from 'react';
import { FullPageTemplate } from '../../templates/fullPageTemplate/FullPageTemplate';

import { Link } from 'react-router-dom';
import * as s from './NotFoundPage.scss';
export class NotFoundPage extends React.Component {
  public render(): JSX.Element {
    return (
      <FullPageTemplate>
        <div className={s.container}>
          <div className={s.content}>
            <h2>404</h2>
            <h3>Oops, the page you're looking for does not exist.</h3>
            <Link to="/"><button className={s.btn}>Return to Home</button></Link>

          </div>
        </div>
      </FullPageTemplate>
    );
  }
}
