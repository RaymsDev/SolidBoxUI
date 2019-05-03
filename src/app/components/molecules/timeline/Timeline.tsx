import * as moment from 'moment';
import 'moment/locale/fr';
import * as React from 'react';
import { DateHelper } from '../../../helpers/date.helper';
import { IListNormalized } from '../../../models/IListNormalized';
import { ITask } from '../../../models/Task';
import { IUser } from '../../../models/User';
import { IUserTask } from '../../../models/UserTask';
import { TimelineRow } from '../../atoms/timelineRow/TimelineRow';
import { ITimelineProps } from './ITimelineProps';
import { ITimelineState } from './ITimelineState';
import * as styles from './Timeline.scss';
moment.locale('fr');

export class Timeline extends React.Component<ITimelineProps, ITimelineState> {
  constructor(props: ITimelineProps) {
    super(props);

    this.state = {};
  }

  public render(): JSX.Element {
    const { userList, userTaskList, taskList } = this.props;
    const now = moment();
    const days = DateHelper.GetMonthDays();
    return (
      <table className={styles.timeline}>
        <thead>
          <tr className={styles.row}>
            <th className={styles.firstColumn} />
            {days.map((d, i) => this.createDay(i, d))}
          </tr>
        </thead>
        <tbody>{this.createRows(days, userList, taskList, userTaskList)}</tbody>
      </table>
    );
  }

  private createDay(key: any, date: moment.Moment): JSX.Element {
    return (
      <th
        className={`${styles.column} ${
          DateHelper.IsLastDayOfWeek(date) ? styles.lastOfWeek : ''
        }`}
        key={key}
      >
        {`${date.format('D')}/${date.format('MM')}`}
      </th>
    );
  }

  private createRows(
    days: moment.Moment[],
    userList: IListNormalized<IUser>,
    taskList: IListNormalized<ITask>,
    userTaskList: IListNormalized<IUserTask>,
  ): JSX.Element {
    const { entities, idList } = userList;
    const users = idList.map(id => entities[id]);
    return (
      <>
        {users.map(u => {
          const userTasks = u.userTaskIdList
            .filter(id => userTaskList.entities.hasOwnProperty(id))
            .map(id => userTaskList.entities[id]);
          return (
            <TimelineRow
              key={u.id}
              days={days}
              user={u}
              userTaskList={userTasks}
              taskList={taskList}
            />
          );
        })}
      </>
    );
  }
}
