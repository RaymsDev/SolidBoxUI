import { Moment } from 'moment';
import * as React from 'react';
import { DateHelper } from '../../../helpers/date.helper';
import { IListNormalized } from '../../../models/IListNormalized';
import { ITask } from '../../../models/Task';
import { IUserTask } from '../../../models/UserTask';
import { ITimelineRowProps } from './ITimelineRowProps';
import * as styles from './TimelineRow.scss';
export class TimelineRow extends React.Component<ITimelineRowProps> {
  constructor(props: ITimelineRowProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { days, user, userTaskList, taskList } = this.props;
    return (
      <tr className={styles.row}>
        <th className={styles.user}>{`${user.firstName} ${user.lastName}`}</th>
        {days.map(d => (
          <td
            className={`${styles.day} ${
              DateHelper.IsLastDayOfWeek(d) ? styles.lastOfWeek : ''
            }`}
            key={d.unix()}
          >
            {this.createUserTask(d, taskList, userTaskList)}
          </td>
        ))}
      </tr>
    );
  }

  private createUserTask(
    day: Moment,
    taskList: IListNormalized<ITask>,
    userTaskList: IUserTask[],
  ): JSX.Element {
    const userTasksOfTheDay = userTaskList.filter(ut =>
      DateHelper.IsSameDay(day, ut.startAt),
    );
    return (
      <div className={styles.userTaskContainer}>
        {userTasksOfTheDay
          .filter(ut => taskList.idList.some(id => id === ut.taskId))
          .map((ut, index) => {
            const { name } = taskList.entities[ut.taskId];
            return (
              <div key={index} className={styles.userTask}>
                {name}
              </div>
            );
          })}
      </div>
    );
  }
}
