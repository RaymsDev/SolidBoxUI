export enum Mode {
  Edit,
  Create,
  View
}

export interface IEditTemplateProps {
  mode: Mode;
  onSave: () => void;
  onDelete: () => void;
  onCreate: () => void;
}
