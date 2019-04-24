import * as React from 'react';
import {
  Dimmer,
  Divider,
  DropdownProps,
  Form,
  InputOnChangeData,
  Loader,
  TextAreaProps,
} from 'semantic-ui-react';
import { RouteList } from '../../../../config/RouteList';
import { Project } from '../../../models/Project';
import { DatePicker } from '../../atoms/form/datePicker/DatePicker';
import { Input } from '../../atoms/form/input/Input';
import { Select } from '../../atoms/form/select/Select';
import { TextArea } from '../../atoms/form/textArea/TextArea';
import { EditTemplate } from '../../templates/editTemplate/EditTemplate';
import { Mode } from '../../templates/editTemplate/IEditTemplateProps';
import { IEditProjectPageProps } from './IEditProjectPageProps';

export class EditProjectPage extends React.Component<IEditProjectPageProps> {
  private edited: Project;
  private mode: Mode;

  constructor(props: IEditProjectPageProps) {
    super(props);
    this.createEdited();
    this.setMode();
  }

  public setMode() {
    if (this.props.match.path === RouteList.editProject) {
      this.mode = Mode.Edit;
    } else if (this.props.match.path === RouteList.viewProject) {
      this.mode = Mode.View;
    } else if (this.props.match.path === RouteList.createProject) {
      this.mode = Mode.Create;
    }
  }

  public createEdited() {
    if (this.props.match.params.id) {
      this.edited = this.props.listProject.find(
        p => p.id === +this.props.match.params.id,
      );
      if (this.edited) {
        this.edited = this.edited.clone();
      }
    } else {
      this.edited = new Project();
    }
  }

  public render(): JSX.Element {
    const {
      listProjectMode,
      listProjectStatus,
      listUser,
      agenciesNormalized,
      listBranch,
      listTeam,
      listClient,
      listProject,
      onDelete,
      onSave,
      onCreate,
      isFetching,
      isFetchingMessage,
    } = this.props;
    this.setMode();

    if (isFetching) {
      return (
        <Dimmer active={true}>
          <Loader>{isFetchingMessage}</Loader>
        </Dimmer>
      );
    }

    if (!this.edited) {
      this.createEdited();
    }

    const itemProjectMode = listProjectMode.map(v => ({
      text: v.name,
      value: v.id,
    }));

    const itemProjectStatus = listProjectStatus.map(v => ({
      text: v.name,
      value: v.id,
    }));

    const itemUser = listUser.idList
      .map(id => listUser.entities[id])
      .filter(u => u.teamId === this.edited.teamId)
      .map(v => ({
        text: v.firstName + ' ' + v.lastName,
        value: v.id,
      }));

    const itemAgency = agenciesNormalized.idList.map(id => ({
      text: agenciesNormalized.entities[id].name,
      value: agenciesNormalized.entities[id].id,
    }));

    const itemBranch = listBranch.idList
      .map(id => listBranch.entities[id])
      .filter(b => b.agencyId === this.edited.agencyId)
      .map(v => ({
        text: v.name,
        value: v.id,
      }));

    const itemTeam = listTeam.idList
      .map(id => listTeam.entities[id])
      .filter(t => t.branchId === this.edited.branchId)
      .map(v => ({
        text: v.name,
        value: v.id,
      }));

    const itemClient = listClient.map(v => ({
      text: v.name,
      value: v.id,
    }));

    const itemProject = listProject
      .filter(p => p.clientId === this.edited.clientId)
      .map(v => ({
        text: v.name,
        value: v.id,
      }));

    return (
      <EditTemplate
        mode={this.mode}
        onDelete={this.onDelete(onDelete)}
        onSave={this.onSave(onSave)}
        onCreate={this.onCreate(onCreate)}
      >
        <Form.Field>
          <Input
            enabled={this.enabled()}
            value={this.edited.name}
            label="Name"
            onChange={this.onChangeInput(this.onChangeProperty('name'))}
          />
        </Form.Field>
        <Form.Group widths="equal">
          <DatePicker
            dateFormat="dd-MM-YYYY"
            enabled={this.enabled()}
            value={this.edited.startDate}
            label="Start date"
            onChange={this.onChangeProperty('startDate')}
          />
          <DatePicker
            dateFormat="dd-MM-YYYY"
            enabled={this.enabled()}
            value={this.edited.endDate}
            label="End date"
            onChange={this.onChangeProperty('endDate')}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Select
            enabled={this.enabled()}
            value={this.edited.projectStatutId}
            list={itemProjectStatus}
            label="Status"
            onChange={this.onChangeSelect(this.onChangeProperty('projectStatutId'))}
          />
          <Select
            enabled={this.enabled()}
            value={this.edited.projectModeId}
            list={itemProjectMode}
            label="Mode"
            onChange={this.onChangeSelect(this.onChangeProperty('projectModeId'))}
          />
        </Form.Group>
        <Divider />
        <Form.Group widths="equal">
          <Select
            enabled={this.enabled()}
            value={this.edited.agencyId}
            list={itemAgency}
            label="Agency"
            onChange={this.onChangeSelect(this.onChangeProperty('agencyId'))}
          />
          <Select
            enabled={this.enabled()}
            value={this.edited.branchId}
            list={itemBranch}
            label="Branch"
            onChange={this.onChangeSelect(this.onChangeProperty('branchId'))}
          />
          <Select
            enabled={this.enabled()}
            value={this.edited.teamId}
            list={itemTeam}
            label="Team"
            onChange={this.onChangeSelect(this.onChangeProperty('teamId'))}
          />
        </Form.Group>
        <Select
          enabled={this.enabled()}
          value={this.edited.ownerUserId}
          list={itemUser}
          label="Owner"
          onChange={this.onChangeSelect(this.onChangeProperty('ownerUserId'))}
        />
        <Divider />
        <Select
          enabled={this.enabled()}
          value={this.edited.clientId}
          list={itemClient}
          label="Client"
          onChange={this.onChangeSelect(this.onChangeProperty('clientId'))}
        />
        <Select
          enabled={this.enabled()}
          value={this.edited.parentProjectId}
          list={itemProject}
          label="Parent"
          onChange={this.onChangeSelect(this.onChangeProperty('parentProjectId'))}
        />
        <Divider />
        <TextArea
          onChange={this.onChangeTextArea(this.onChangeProperty('comment'))}
          label="Comment"
          enabled={this.enabled()}
          value={this.edited.comment}
        />
      </EditTemplate>
    );
  }

  private onDelete(onDelete: (project: Project) => void): () => void {
    return () => onDelete(this.edited);
  }

  private onSave(onSave: (project: Project) => void): () => void {
    return () => onSave(this.edited);

  }

  private onCreate(onCreate: (project: Project) => void): () => void {
    return () => onCreate(this.edited);
  }

  private onChangeTextArea(
    onChange: (
      newValue: boolean | number | string | Array<boolean | number | string>,
    ) => void
  ): (e: React.FormEvent, { value }: TextAreaProps) => void {
    return (e: React.FormEvent, { value }: TextAreaProps) =>
      onChange(value);
  }

  private onChangeProperty(attribut: keyof Project): (newValue: any) => void {
    return (newValue: any): void => {
      this.edited[attribut] = newValue;
      if (attribut === 'agencyId') {
        this.edited.branchId = null;
        this.edited.teamId = null;
        this.edited.ownerUserId = null;
      }
      if (attribut === 'branchId') {
        this.edited.teamId = null;
        this.edited.ownerUserId = null;
      }
      if (attribut === 'teamId') {
        this.edited.ownerUserId = null;
      }
      if (attribut === 'clientId') {
        this.edited.parentProjectId = null;
      }
      this.forceUpdate();
    };
  }

  private enabled(): boolean {
    return this.mode !== Mode.View;
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
