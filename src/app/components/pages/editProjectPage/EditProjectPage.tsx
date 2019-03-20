import * as React from 'react';
import { EditTemplate } from '../../templates/editTemplate/EditTemplate';
import { Mode } from '../../templates/editTemplate/IEditTemplateProps';
import { Form, Button, DropdownItemProps } from 'semantic-ui-react'
import { IEditProjectPageProps } from './IEditProjectPageProps';
import { Project } from '../../../models/Project';
import DatePicker from "react-datepicker";

export class EditProjectPage extends React.Component<IEditProjectPageProps> {

  private toggle(label: string, enabled: boolean, onChange: (newValue: boolean) => void): JSX.Element {
    let text;
    if (enabled) {
      text = 'enabled';
    } else {
      text = 'disabled';
    }
    return (
      <>
        <label>{label}</label>
        <Button toggle active={enabled} onClick={() => onChange(!enabled)}>
          {text}
        </Button>
      </>
    );
  }

  private name(text: string, onChange: (newValue: string) => void): JSX.Element {
    return (
      <Form.Input fluid label='Name' placeholder='Name' value={text} onChange={(e, { value }) => onChange(value)} />
    );
  }

  private date(label: string, value: Date, onChange: (newValue: any) => void): JSX.Element {
    return (
      <>
        <label>{label}</label>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={value}
          onChange={onChange}
        />
      </>
    );
  }

  private select(label: string, list: Array<DropdownItemProps>, value: boolean | number | string, onChange: (newValue: any) => void): JSX.Element {
    return (<Form.Select fluid label={label} options={list} placeholder={label} onChange={(e, { value }) => onChange(value)} value={value} />)
  }

  public render(): JSX.Element {
    const { newProject, onChangeProperty, listProjectMode, listProjectStatus } = this.props;

    const itemProjectMode = listProjectMode.map(v => ({
      text: v.name,
      value: v.id,
    }));

    const itemProjectStatus = listProjectStatus.map(v => ({
      text: v.name,
      value: v.id,
    }));
    return (
      <EditTemplate
        mode={Mode.Edit}
        onDelete={undefined}
        onSave={undefined}
      >
        <Form.Field>
          {this.name(newProject.name, onChangeProperty('name'))}
        </Form.Field>
        <Form.Group widths='equal'>
          <Form.Field>
            {this.date('Start date', newProject.startDate, onChangeProperty('startDate'))}
          </Form.Field>
          <Form.Field>
            {this.date('End date', newProject.endDate, onChangeProperty('endDate'))}
          </Form.Field>
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field>
            {this.select('Status', itemProjectMode, newProject.projectStatutId, onChangeProperty('projectStatutId'))}
          </Form.Field>
          <Form.Field>
            {this.select('Mode', itemProjectStatus, newProject.projectModeId, onChangeProperty('projectModeId'))}
          </Form.Field>
        </Form.Group>
        <Form.Field>
          {this.toggle('enable over run', newProject.enableOverRun, onChangeProperty('enableOverRun'))}
        </Form.Field>
      </EditTemplate >
    );
  }
}
