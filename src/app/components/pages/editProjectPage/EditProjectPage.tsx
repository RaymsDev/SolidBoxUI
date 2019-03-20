import * as React from 'react';
import { Button, DropdownProps, Form, InputOnChangeData, TextAreaProps } from 'semantic-ui-react';
import { DatePicker } from '../../atoms/form/datePicker/DatePicker';
import { Select } from '../../atoms/form/select/Select';
import { TextArea } from '../../atoms/form/textArea/TextArea';
import { EditTemplate } from '../../templates/editTemplate/EditTemplate';
import { Mode } from '../../templates/editTemplate/IEditTemplateProps';
import { IEditProjectPageProps } from './IEditProjectPageProps';

export class EditProjectPage extends React.Component<IEditProjectPageProps> {

  public render(): JSX.Element {
    const {
      newProject,
      onChangeProperty,
      listProjectMode,
      listProjectStatus,
      listUser,
      listAgency,
      listBranch,
      listTeam,
      listClient,
      listProject,
    } = this.props;

    const itemProjectMode = listProjectMode.map((v) => ({
      text: v.name,
      value: v.id,
    }));

    const itemProjectStatus = listProjectStatus.map((v) => ({
      text: v.name,
      value: v.id,
    }));

    const itemUser = listUser.map((v) => ({
      text: v.name,
      value: v.id,
    }));
    const itemAgency = listAgency.map((v) => ({
      text: v.name,
      value: v.id,
    }));
    const itemBranch = listBranch.map((v) => ({
      text: v.name,
      value: v.id,
    }));
    const itemTeam = listTeam.map((v) => ({
      text: v.name,
      value: v.id,
    }));
    const itemClient = listClient.map((v) => ({
      text: v.name,
      value: v.id,
    }));
    const itemProject = listProject.map((v) => ({
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
          <DatePicker
            enabled={true}
            value={newProject.startDate}
            label="Start date"
            onChange={onChangeProperty('startDate')}
          /><DatePicker
            enabled={true}
            value={newProject.endDate}
            label="End date"
            onChange={onChangeProperty('endDate')}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Select
            enabled={true}
            value={newProject.projectStatutId}
            list={itemProjectMode}
            label="Status"
            onChange={this.onChangeSelect(onChangeProperty('projectStatutId'))}
          />
          <Select
            enabled={true}
            value={newProject.projectModeId}
            list={itemProjectStatus}
            label="Mode"
            onChange={this.onChangeSelect(onChangeProperty('projectModeId'))}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Select
            enabled={true}
            value={newProject.agencyId}
            list={itemAgency}
            label="Agency"
            onChange={this.onChangeSelect(onChangeProperty('agencyId'))}
          />
          <Select
            enabled={true}
            value={newProject.branchId}
            list={itemBranch}
            label="Branch"
            onChange={this.onChangeSelect(onChangeProperty('branchId'))}
          />
          <Select
            enabled={true}
            value={newProject.teamId}
            list={itemTeam}
            label="Team"
            onChange={this.onChangeSelect(onChangeProperty('teamId'))}
          />
        </Form.Group>
        <Select
          enabled={true}
          value={newProject.clientId}
          list={itemClient}
          label="Client"
          onChange={this.onChangeSelect(onChangeProperty('clientId'))}
        />
        <Select
          enabled={true}
          value={newProject.parentProjectId}
          list={itemProject}
          label="Parent"
          onChange={this.onChangeSelect(onChangeProperty('parentProjectId'))}
        />
        <Form.Group widths='equal'>
          <Select
            enabled={true}
            value={newProject.ownerUserId}
            list={itemUser}
            label="Owner"
            onChange={this.onChangeSelect(onChangeProperty('ownerUserId'))}
          />
          <Form.Field>
            {this.toggle('enable over run', newProject.enableOverRun, onChangeProperty('enableOverRun'))}
          </Form.Field>
        </Form.Group>
        <TextArea
          onChange={(e: React.FormEvent, { value }: TextAreaProps) => onChangeProperty('comment')(value)}
          label="Comment"
          enabled={true}
          value={newProject.comment}
        />
      </EditTemplate>
    );
  }

  private onChangeSelect(onChange: (newValue: boolean | number | string | Array<boolean | number | string>) => void): (e: React.SyntheticEvent<HTMLElement>, { value }: DropdownProps) => void {
    return (e: React.SyntheticEvent<HTMLElement>, { value }: DropdownProps) => onChange(value);
  }

  private toggle(label: string, enabled: boolean, onChange: (newValue: boolean) => void): JSX.Element {
    let text;
    if (enabled) {
      text = 'enabled';
    } else {
      text = 'disabled';
    }
    const onClick = () => onChange(!enabled);
    return (
      <>
        <label>{label}</label>
        <Button toggle={true} active={enabled} onClick={onClick}>
          {text}
        </Button>
      </>
    );
  }

  private name(text: string, onChange: (newValue: string) => void): JSX.Element {
    const handler = (e: React.ChangeEvent, { value }: InputOnChangeData) => onChange(value);
    return (
      <Form.Input fluid={true} label='Name' placeholder='Name' value={text} onChange={handler} />
    );
  }
}
