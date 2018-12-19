import * as React from 'react';
import { IProjectAndTaskByClientProps } from './IProjectAndTaskByClientProps';

export class ProjectAndTaskByClient extends React.Component<IProjectAndTaskByClientProps> {
  public render(): JSX.Element {
    return (
      <table >
        <thead>
          <th>Taches</th>
          <th>Charge</th>
          <th>WPlannif</th>
          <th>WRéel</th>
          <th>%Theorique</th>
          <th>%Réel</th>
          <th>Date de fin</th>
        </thead>
        <tbody>
          <tr>
            <td>test</td>
          </tr>
          <tr>
            <td>test</td>
          </tr>
          <tr>
            <td>test</td>
          </tr>
          <tr>
            <td>test</td>
          </tr>
          <tr>
            <td>test</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
