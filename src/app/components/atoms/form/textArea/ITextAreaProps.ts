import { TextAreaProps } from 'semantic-ui-react';

export interface ITextAreaProps {
  enabled: boolean;
  label: string;
  value: string;
  onChange: (e: React.FormEvent, { value }: TextAreaProps) => void;
}
