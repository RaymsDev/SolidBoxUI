import * as moment from 'moment';
enum weekDays {
  monday = 1,
  friday = 5,
  saturday = 6,
  sunday = 7,
}

export class DateHelper {
  public static GetMonthDays(): moment.Moment[] {
    const dates = [];
    const now = moment();
    const year = now.format('YYYY');
    const month = now.format('MM');
    const lastDay = now.endOf('month').date();
    const startDay = now.startOf('month').format('DD');

    for (let index = 0; index < lastDay; index++) {
      const date = `${year}-${month}-${startDay}`;
      let day = moment(date);
      if (index !== 0) {
        day = day.add(index, 'day');
      }

      if (this.IsWorkDay(day)) {
        dates.push(day);
      }
    }

    return dates;
  }

  public static IsWorkDay(day: moment.Moment): boolean {
    return (
      day.isoWeekday() !== weekDays.saturday &&
      day.isoWeekday() !== weekDays.sunday
    );
  }

  public static IsLastDayOfWeek(day: moment.Moment): boolean {
    return day.isoWeekday() === weekDays.friday;
  }
  public static IsFirstDayOfWeek(day: moment.Moment): boolean {
    return day.isoWeekday() === weekDays.monday;
  }

  public static IsSameDay(expected: moment.Moment, day: Date | moment.Moment) {
    return expected.isSame(day);
  }
}
