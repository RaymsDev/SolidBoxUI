import * as React from 'react';
import DatePicker from 'react-datepicker';
import {
  Divider,
  DropdownProps,
  Form,
  InputOnChangeData,
  TextAreaProps,
} from 'semantic-ui-react';
import { Input } from '../../atoms/form/input/Input';
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
      onDelete,
      onSave,
      onCreate,
    } = this.props;

    const itemProjectMode = listProjectMode.map(v => ({
      text: v.name,
      value: v.id,
    }));

    const itemProjectStatus = listProjectStatus.map(v => ({
      text: v.name,
      value: v.id,
    }));

    const itemUser = listUser.map(v => ({
      text: v.firstName + ' ' + v.lastName,
      value: v.id,
    }));
    const itemAgency = listAgency.map(v => ({
      text: v.name,
      value: v.id,
    }));
    const itemBranch = listBranch.map(v => ({
      text: v.name,
      value: v.id,
    }));
    const itemTeam = listTeam.map(v => ({
      text: v.name,
      value: v.id,
    }));
    const itemClient = listClient.map(v => ({
      text: v.name,
      value: v.id,
    }));
    const itemProject = listProject.map(v => ({
      text: v.name,
      value: v.id,
    }));

    const mode = Mode.Create;
    return (
      <EditTemplate
        mode={mode}
        onDelete={onDelete}
        onSave={onSave}
        onCreate={onCreate}
      >
        <Form.Field>
          <Input
            enabled={this.enabled(mode)}
            value={newProject.name}
            label="Name"
            onChange={this.onChangeInput(onChangeProperty('name'))}
          />
        </Form.Field>
        <Form.Group widths="equal">
          <DatePicker
            dateFormat="dd-MM-YYYY"
            disabled={!this.enabled(mode)}
            value={newProject.startDate.toISOString()}
            title="Start date"
            onChange={onChangeProperty('startDate')}
          />
          <DatePicker
            dateFormat="dd-MM-YYYY"
            disabled={!this.enabled(mode)}
            value={newProject.endDate.toISOString()}
            title="End date"
            onChange={onChangeProperty('endDate')}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Select
            enabled={this.enabled(mode)}
            value={newProject.projectStatutId}
            list={itemProjectStatus}
            label="Status"
            onChange={this.onChangeSelect(onChangeProperty('projectStatutId'))}
          />
          <Select
            enabled={this.enabled(mode)}
            value={newProject.projectModeId}
            list={itemProjectMode}
            label="Mode"
            onChange={this.onChangeSelect(onChangeProperty('projectModeId'))}
          />
        </Form.Group>
        <Divider />
        <Form.Group widths="equal">
          <Select
            enabled={this.enabled(mode)}
            value={newProject.agencyId}
            list={itemAgency}
            label="Agency"
            onChange={this.onChangeSelect(onChangeProperty('agencyId'))}
          />
          <Select
            enabled={this.enabled(mode)}
            value={newProject.branchId}
            list={itemBranch}
            label="Branch"
            onChange={this.onChangeSelect(onChangeProperty('branchId'))}
          />
          <Select
            enabled={this.enabled(mode)}
            value={newProject.teamId}
            list={itemTeam}
            label="Team"
            onChange={this.onChangeSelect(onChangeProperty('teamId'))}
          />
        </Form.Group>
        <Select
          enabled={this.enabled(mode)}
          value={newProject.ownerUserId}
          list={itemUser}
          label="Owner"
          onChange={this.onChangeSelect(onChangeProperty('ownerUserId'))}
        />
        <Divider />
        <Select
          enabled={this.enabled(mode)}
          value={newProject.clientId}
          list={itemClient}
          label="Client"
          onChange={this.onChangeSelect(onChangeProperty('clientId'))}
        />
        <Select
          enabled={this.enabled(mode)}
          value={newProject.parentProjectId}
          list={itemProject}
          label="Parent"
          onChange={this.onChangeSelect(onChangeProperty('parentProjectId'))}
        />
        <Divider />
        <TextArea
          onChange={(e: React.FormEvent, { value }: TextAreaProps) =>
            onChangeProperty('comment')(value)
          }
          label="Comment"
          enabled={this.enabled(mode)}
          value={newProject.comment}
        />
      </EditTemplate>
    );
  }

  private enabled(mode: Mode): boolean {
    return mode !== Mode.View;
  }

  private onChangeSelect(
    onChange: (
      newValue: boolean | number | string | Array<boolean | number | string>,
    ) => void,
  ): (e: React.SyntheticEvent<HTMLElement>, { value }: DropdownProps) => void {
    return (e: React.SyntheticEvent<HTMLElement>, { value }: DropdownProps) =>
      onChange(value);
  }

  private onChangeInput(
    onChange: (newValue: string) => void,
  ): (e: React.ChangeEvent, { value }: InputOnChangeData) => void {
    return (e: React.ChangeEvent, { value }: InputOnChangeData) =>
      onChange(value);
  }
}
