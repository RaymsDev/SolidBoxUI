import * as moment from 'moment';
import 'moment/locale/fr';
import * as React from 'react';
import { ITimelineProps } from './ITimelineProps';
import { ITimelineState } from './ITimelineState';

moment.locale('fr');

const groups = [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' }];

const items = [
  {
    id: 1,
    group: 1,
    title: 'item 1',

    start_time: moment(),
    end_time: moment().add(1, 'day'),
    canResize: true,
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: moment().add(-0.5, 'day'),
    end_time: moment().add(0.5, 'day'),
  },
  {
    id: 3,
    group: 1,
    title: 'item 3',
    start_time: moment().add(2, 'day'),
    end_time: moment().add(3, 'day'),
  },
];
export class Timeline extends React.Component<ITimelineProps, ITimelineState> {
  constructor(props: ITimelineProps) {
    super(props);

    this.state = {};
    const test = moment().isoWeekday(1);
    console.log(test);
  }

  public render(): JSX.Element {
    return <div />;
  }
}
