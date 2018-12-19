
import * as React from 'react';
import { Link } from 'react-router-dom';

import { INavbarProps } from './INavbarProps';
import * as s from './Navbar.scss';
export class Navbar extends React.Component<INavbarProps> {
  public render(): JSX.Element {
    const { title } = this.props;
    return (
      <nav className={s.container} >
        <Link className={s.title} to="/"><h1>{title}</h1></Link>
        <div className={s.emptyFill} />
        <ul className={s.linkButtons}>
          <li className={s.link}><Link to="/project">Projet</Link></li>
          <li className={s.link}><Link to="/planning">Planning</Link></li>
        </ul>
      </nav>
    );
  }
}
