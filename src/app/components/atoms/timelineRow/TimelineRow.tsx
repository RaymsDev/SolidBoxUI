import * as React from 'react';
import { DateHelper } from '../../../helpers/date.helper';
import { ITimelineRowProps } from './ITimelineRowProps';
import * as styles from './TimelineRow.scss';
export class TimelineRow extends React.Component<ITimelineRowProps> {
  constructor(props: ITimelineRowProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { days, user } = this.props;
    return (
      <tr className={styles.row}>
        <th className={styles.user}>{`${user.firstName} ${user.lastName}`}</th>
        {days.map(d => (
          <td
            className={`${styles.day} ${
              DateHelper.IsLastDayOfWeek(d) ? styles.lastOfWeek : ''
            }`}
            key={d.unix()}
          />
        ))}
      </tr>
    );
  }
}
