import * as React from 'react';
import RDatePicker from "react-datepicker";
import { IDatePickerProps } from './IDatePickerProps';

export class DatePicker extends React.Component<IDatePickerProps> {

  public render(): JSX.Element {
    const { enabled, label, onChange, value, dateFormat } = this.props;
    return (
      <>
        <label>{label}</label>
        <RDatePicker
          disabled={!enabled}
          dateFormat={dateFormat}
          selected={value}
          onChange={onChange}
        />
      </>
    );
  }
}
